// Recursive (TLE)
var climbStairs = function (n) {
  function dp(n) {
    if (n <= 2) return n;
    return dp(n - 1) + dp(n - 2);
  }
  return dp(n);
};
// TC: O(2 ^ n) builds binary recursion tree, computing same thing multiple times
// SC: O(n)

// Memoization
var climbStairs = function (n) {
  const memo = {};
  function dp(n, memo) {
    if (n <= 2) return n;
    if (memo[n]) return memo[n];
    return (memo[n] = dp(n - 1, memo) + dp(n - 2, memo));
  }
  return dp(n, memo);
};
// TC: O(n)
// SC: O(n)

// Tabulation
var climbStairs = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// TC: O(n)
// SC: O(n)

// Tabulation - Optimized
var climbStairs = function (n) {
  if (n <= 2) return n;
  let one = 1,
    two = 2;
  for (let i = 3; i < n + 1; i++) {
    let tmp = two;
    two = one + two;
    one = tmp;
  }
  return two;
};
// TC: O(n)
// SC: O(1)
