// O(NLog(N) + Mlog(M)) Time | O(1) Space

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let smallest = Number.MAX_SAFE_INTEGER;
  let pairs = [];
  let idxOne = 0;
  let idxTwo = 0;

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let temp = Math.abs(arrayOne[idxOne] - arrayTwo[idxTwo]);
    if (temp < smallest) {
      smallest = temp;
      pairs = [arrayOne[idxOne], arrayTwo[idxTwo]];
    }
    arrayOne[idxOne] > arrayTwo[idxTwo] ? idxTwo++ : idxOne++;
  }
  return pairs;
}
