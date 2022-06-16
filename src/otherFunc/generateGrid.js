export function generateGrid(width = 1, height = 1) {
    let arr = [];
  
    for (let i = 0; i < height; i++) {
  
      arr[i] = [];
  
      for (let j = 0; j < width; j++) {
  
        let newObj = {
          width: 1,
          height: 1,
          top: i,
          left: j,
        };
  
        arr[i][j] = newObj;
  
      };
    };
    return arr;
  };
  
 