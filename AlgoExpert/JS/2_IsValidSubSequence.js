const inputArray = [5, 1, 22, 25, 6, -1, 8, 10];
const inputSequence = [1, 6, -1, 10];

function isValidSubsequenceWhile(array, sequence) {
  let arrPointer = 0;
  let seqPointer = 0;

  while (arrPointer < array.length && seqPointer < sequence.length) {
    if (array[arrPointer] == sequence[seqPointer]) {
      seqPointer++;
    }
    arrPointer++;
  }
  return seqPointer == sequence.length;
}

console.log(
  "While loop Valid Subsequence",
  isValidSubsequenceWhile(inputArray, inputSequence)
);
