// O(N) Time | O(1) Space

function findThreeLargestNumbers(array) {
  const output = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= output[2]) {
      output[0] = output[1];
      output[1] = output[2];
      output[2] = array[i];
    } else if (array[i] > output[1] && array[i] < output[2]) {
      output[0] = output[1];
      output[1] = array[i];
    } else if (array[i] < output[1] && array[i] > output[0]) {
      output[0] = array[i];
    }
  }
  return output;
}
