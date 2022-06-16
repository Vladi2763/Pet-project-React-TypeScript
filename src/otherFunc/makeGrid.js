import { generateGrid } from "./generateGrid";
import { enlargeCell } from "./enlargeCell";

export function makeGrid(dimensionalArr) {
    let width = 1;
    let height = 1;
    let maxLeft = 0;
    let maxTop = 0;
  
    let top = 0;
    let left = 0;
  
    for( let i = 0; i < dimensionalArr.length; i++) {
      if (maxLeft < dimensionalArr[i].left + dimensionalArr[i].width) {
        maxLeft = dimensionalArr[i].left + dimensionalArr[i].width;
      }
      if (maxTop < dimensionalArr[i].top + dimensionalArr[i].height ) {
        maxTop = dimensionalArr[i].top + dimensionalArr[i].height;
      }
      
      if (dimensionalArr[i].width > 1) {
        width = dimensionalArr[i].width;
      }
      
      if (dimensionalArr[i].height > 1) {
        height = dimensionalArr[i].height;
      }
      
      if (dimensionalArr[i].width > 1 || dimensionalArr[i].height > 1) {
        top = dimensionalArr[i].top;
        left = dimensionalArr[i].left;
      } 
    }
  
    
    let location = {
      top: top,
      left: left,
    }
  
  
    let heightGrid = maxTop;
    let widthGrid = maxLeft;
  
    let newGrid = generateGrid(widthGrid, heightGrid);
    
    let newEnlargeCell = enlargeCell( newGrid, location, width, height);
    if ((width > 1 || height > 1) && (widthGrid === 4)) {
    }
    return newEnlargeCell;
      
  }