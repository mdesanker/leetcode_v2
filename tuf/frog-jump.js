function frogJump(n, heights) {
  // Write your code here.
  const memo = new Array(n).fill(-1);
  function dp(i, memo) {
    if (i === 0) return 0;
    if (memo[i] !== -1) return memo[i];

    let single = Math.abs(heights[i] - heights[i - 1]) + dp(i - 1, memo);
    let double = Infinity;
    if (i > 1) {
      double = Math.abs(heights[i] - heights[i - 2]) + dp(i - 2, memo);
    }

    return (memo[i] = Math.min(single, double));
  }
  return dp(n - 1, memo);
}
// TC: O(n)
// SC: O(n)

function frogJump(n, heights) {
  // Write your code here.
  const dp = new Array(n).fill(0);
  dp[0] = 0;

  for (let i = 1; i < n; i++) {
    let single = Math.abs(heights[i] - heights[i - 1]) + dp[i - 1];
    let double = Infinity;
    if (i > 1) {
      double = Math.abs(heights[i] - heights[i - 2]) + dp[i - 2];
    }

    dp[i] = Math.min(single, double);
  }
  return dp[n - 1];
}
// TC: O(n)
// SC: O(n)

function frogJump(n, heights) {
  // Write your code here.
  let one = 0,
    two = 0;

  for (let i = 1; i < n; i++) {
    let single = Math.abs(heights[i] - heights[i - 1]) + two;
    let double = Infinity;
    if (i > 1) {
      double = Math.abs(heights[i] - heights[i - 2]) + one;
    }

    let tmp = Math.min(single, double);
    one = two;
    two = tmp;
  }
  return two;
}
// TC: O(n)
// SC: O(1)

module.exports.frogJump = frogJump;
