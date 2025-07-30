// Brute - TLE
var coinChange = function (coins, amount) {
  const n = coins.length;

  function dp(total) {
    if (total === amount) return 0;
    if (total > amount) return Infinity;

    let res = Infinity;
    for (let i = 0; i < n; i++) {
      res = Math.min(res, 1 + dp(total + coins[i]));
    }
    return res;
  }

  const ans = dp(0);
  return ans === Infinity ? -1 : ans;
};

// Memoization
var coinChange = function (coins, amount) {
  const n = coins.length;
  const memo = new Array(amount).fill(-1);

  function dp(total, memo) {
    if (total === amount) return 0;
    if (total > amount) return Infinity;
    if (memo[total] !== -1) return memo[total];

    let res = Infinity;
    for (let i = 0; i < n; i++) {
      res = Math.min(res, 1 + dp(total + coins[i], memo));
    }
    return (memo[total] = res);
  }

  const ans = dp(0, memo);
  return ans === Infinity ? -1 : ans;
};
// TC: O(n)
// SC: O(n)
