export function enlargeCell(grid, location, width, height) {
  
    let newGrid = JSON.parse(JSON.stringify(grid));
  
    if (location.top + 1 > newGrid.length || location.left + 1 > newGrid[0].length) {
      console.log('Таких координат нет');
      return newGrid;
    }
  
    if (location.left < 0 || location.top < 0) {
      console.log('Таких координат нет');
      return newGrid;
    }
  
    let maxHeight = Math.min(location.top + height, newGrid.length);
    let maxWidth = Math.min(location.left + width, newGrid[0].length);
  
  
    for (let i = location.top; i < maxHeight; i++) {
      for (let j = location.left; j < maxWidth; j++) {
        newGrid[i][j] = null;
      }
    }
      
    newGrid[location.top][location.left] = {
      width: maxWidth - location.left,
      height: maxHeight - location.top,
      top: location.top,
      left: location.left,
    };
  
    return newGrid;
  }