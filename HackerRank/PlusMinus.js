function plusMinus(arr) {
  let plus = 0;
  let minus = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) plus++;
    if (arr[i] < 0) minus++;
    if (arr[i] === 0) zero++;
  }
  console.log((plus / arr.length).toFixed(6));
  console.log((minus / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}
