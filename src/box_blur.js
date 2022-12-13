const box_blur = (image) => {
  let rows = image.length - 2;
  let cols = image[0].length - 2;
  let result = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      let sum = 0;
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          sum += image[k][l];
        }
      }
      const avg = Math.floor(sum / 9);
      row.push(avg);
    }
    result.push(row);
  }
  return result;
};

module.exports = box_blur;

/**
 * ! [[7, 4, 0, 1], 
 *! [5, 6, 2, 2], 
 *! [6, 10, 7, 8], 
 *! [1, 4, 2, 0]]

 * ! [[5, 4], 
* !  [4, 4]]
 */
