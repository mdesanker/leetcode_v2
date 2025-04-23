// Recursive (TLE)
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  function dp(i) {
    if (i < 0) return 0;
    if (i === 0) return cost[0];

    return cost[i] + Math.min(dp(i - 1), dp(i - 2));
  }
  return Math.min(dp(n - 1), dp(n - 2));
};

// Recursive - memoization
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const memo = new Array(n).fill(-1);

  function dp(i) {
    if (i < 0) return 0;
    if (i === 0) return cost[0];

    if (memo[i] !== -1) return memo[i];

    return (memo[i] = cost[i] + Math.min(dp(i - 1), dp(i - 2)));
  }
  return Math.min(dp(n - 1), dp(n - 2));
};
// TC: O(n)
// SC: O(n)

// Tabulation
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  const dp = new Array(n + 1).fill(0);

  dp[0] = 0;
  dp[1] = cost[0];

  for (let i = 2; i < n + 1; i++) {
    dp[i] = cost[i - 1] + Math.min(dp[i - 1], dp[i - 2]);
  }

  return Math.min(dp[n], dp[n - 1]);
};
// TC: O(n)
// SC: O(n)

// Tabulation - optimized
var minCostClimbingStairs = function (cost) {
  const n = cost.length;

  let one = 0;
  let two = cost[0];

  for (let i = 2; i < n + 1; i++) {
    let tmp = cost[i - 1] + Math.min(one, two);
    one = two;
    two = tmp;
  }

  return Math.min(one, two);
};
// TC: O(n)
// SC: O(1)
