// O(N) Time | O(1) Space
function getNthFib(n) {
  if (n == 2) return 1;
  if (n == 1) return 0;
  let arr = [0, 1];
  let counter = 0;

  while (counter < n - 3) {
    let next = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = next;
    counter++;
  }
  return arr[0] + arr[1];
}

function getNthFib(n) {
  if (n == 2) return 1;
  if (n == 1) return 0;
  let arr = [0, 1];
  let counter = 3;

  while (counter <= n) {
    let next = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = next;
    counter++;
  }
  return n > 1 ? arr[1] : arr[0];
}

// O(2^N) Time | O(N) Space (call stack)

function getNthFib(n) {
  if (n == 2) {
    return 1;
  } else if (n == 1) {
    return 0;
  } else return getNthFib(n - 1) + getNthFib(n - 2);
}
// O(N) Time | O(N) Space
function getNthFib(n, memo = { 1: 0, 2: 1 }) {
  if (n in memo) return memo[n];

  memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
  return memo[n];
}
