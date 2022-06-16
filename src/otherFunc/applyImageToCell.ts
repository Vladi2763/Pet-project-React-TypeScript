import { Grid } from "../types/types";

export function applyImageToCell(grid: Grid | null, loc: {top: number, left: number}, src: string): Grid | null {
    let newGrid = JSON.parse(JSON.stringify(grid));
        
    
    newGrid[loc.top][loc.left] = {
      ...newGrid[loc.top][loc.left],
      src: src
    };
  
    return newGrid;
  }