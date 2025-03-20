// Sliding window
var maxProfit = function (prices) {
  let l = 0,
    max = 0;
  for (let r = 0; r < prices.length; r++) {
    const profit = prices[r] - prices[l];
    max = Math.max(max, profit);
    while (l < r && prices[l] > prices[r]) l++;
  }
  return max;
};

// Time: O(n)
// Space: O(1)
