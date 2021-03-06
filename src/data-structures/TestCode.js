//find the min value in an array

function getMin(array) {
  let min;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (min === undefined || element < min) {
      min = element;
    }
    return min;
  }
}

const result = getMin([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result);
