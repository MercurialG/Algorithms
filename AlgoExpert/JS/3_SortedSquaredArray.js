// O(Nlog(N)) time | O(N) - space
const sortedSquaredArray = (array) =>
  array.map((el) => el * el).sort((a, b) => a - b);

console.log();

// O(N) time | O(N) - space
function sortedSquaredArrayPointers(array) {
  let startPointer = 0;
  let endPointer = array.length - 1;
  const outputArr = [];
  while (startPointer <= endPointer) {
    if (Math.abs(array[startPointer]) > Math.abs(array[endPointer])) {
      outputArr.unshift(Math.abs(array[startPointer] * array[startPointer]));
      startPointer++;
    } else {
      outputArr.unshift(
        Math.abs(array[endPointer] * Math.abs(array[endPointer]))
      );
      endPointer--;
    }
  }
  console.log(outputArr);
  return outputArr;
}
