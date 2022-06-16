export function makeDimensionalArr(modifedGrid) {
  
    let arr = []
  
    for (let i = 0; i < modifedGrid.length; i++) {
      for (let j = 0; j < modifedGrid[i].length; j++) {
        if (modifedGrid[i][j] === null) {
          continue;
        } else {
          arr.push(modifedGrid[i][j]);
        }
      }
    }
    return arr;
  }