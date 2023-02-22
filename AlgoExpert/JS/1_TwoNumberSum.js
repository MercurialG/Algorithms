const inputArray = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

// targetSum = el1 + el2 => el1 = targetSum - el2 => put el 1 into map, if map already has el1 - return [el1, el2]
function twoNumberSumMap(array, targetSum) {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    let mid = targetSum - array[i];
    if (map.has(mid)) {
      return [mid, array[i]];
    } else {
      map.set(array[i], true);
    }
  }
  return [];
}

function twoNumberSumTwoPointers(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    }
    if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

function twoNumberSumBrute(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum == targetSum) {
        console.log([firstNum, secondNum]);
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

console.log(
  "Two Number Sum with Hashmap",
  twoNumberSumMap(inputArray, targetSum),
  "Two Number Sum with two pointers",
  twoNumberSumTwoPointers(inputArray, targetSum),
  "Two Number Sum with two for loops",
  twoNumberSumBrute(inputArray, targetSum)
);
