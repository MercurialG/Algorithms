var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxP = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxP = Math.max(maxP, profit);
      console.log(profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxP;
};
