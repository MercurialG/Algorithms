// O(Nlog(N)) Time | O(1) Space

function nonConstructibleChange(coins) {
  let currentMin = 0;
  if (!coins.length) return 1;
  coins.sort((a, b) => a - b);
  console.log(coins.length);
  for (let i = 0; i < coins.length; i++) {
    if (coins[0] !== 1) return 1;
    console.log(i);
    if (coins[i] > currentMin + 1 || i == coins.lentgh + 1) {
      return currentMin + 1;
    } else currentMin += coins[i];
  }
  return currentMin + 1;
}

console.log(nonConstructibleChange([1, 1, 3, 5, 6, 23, 8]));
