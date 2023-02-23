const inputArray = [5, 1, 22, 25, 6, -1, 8, 10];
const inputSequence = [1, 6, -1, 10];

// O(n) time | O(1) space
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

function isValidSubsequenceFor(array, sequence) {
  let seqPointer = 0;
  for (let i = 0; i < array.length; i++) {
    if (seqPointer === sequence.length) return true;
    if (sequence[seqPointer] === array[i]) {
      seqPointer++;
    }
  }
  return seqPointer === sequence.length;
}

console.log(
  "While loop Valid Subsequence",
  isValidSubsequenceWhile(inputArray, inputSequence),
  "For loop Valid Subsequence",
  isValidSubsequenceFor(inputArray, inputSequence)
);
