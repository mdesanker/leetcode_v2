// Brute
var canJump = function (nums) {
  const n = nums.length;
  function dp(i) {
    if (i >= n - 1) return true;

    for (let j = 1; j <= nums[i]; j++) {
      if (dp(i + j)) return true;
    }
    return false;
  }
  return dp(0);
};

// Memo
var canJump = function (nums) {
  const n = nums.length;
  const memo = new Array(n).fill(-1);
  function dp(i) {
    if (i >= n - 1) return true;
    if (memo[i] !== -1) return memo[i];

    for (let j = 1; j <= nums[i]; j++) {
      if (dp(i + j)) return (memo[i] = true);
    }
    return (memo[i] = false);
  }
  return dp(0);
};
// TC: O(n)
// SC: O(n)

// Tab
var canJump = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(false);
  dp[n - 1] = true;

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 1; j <= nums[i]; j++) {
      if (dp[i + j] === true) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[0];
};
// TC: O(n)
// SC: O(n)

// Optimal
var canJump = function (nums) {
  const n = nums.length;
  let target = n - 1;

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] + i >= target) target = i;
  }
  return target === 0;
};
// TC: O(n)
// SC: O(1)
