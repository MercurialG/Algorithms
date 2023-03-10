function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0;
  for (let i = 0; i < arr.length; i++) {
    diag1 += arr[i][i];
    diag2 += arr[i][arr[i].length - i - 1];
    console.log(diag1, diag2);
  }
  return Math.abs(diag1 - diag2);
}
