
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let elementOfArray = []
  let newArray = []
  if (matrix === undefined || matrix === null || matrix.length === 0) {
    return [];
  } else {
    for (let i = 0; i < matrix.length; i++) {
      elementOfArray = matrix[i]
      if (i % 2 !== 0) {
        elementOfArray.reverse()
      }
      newArray[i] = elementOfArray;
    }
    return newArray.flat();
  }
  
}
