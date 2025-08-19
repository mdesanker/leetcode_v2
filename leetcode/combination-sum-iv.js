// Brute - TLE
var combinationSum4 = function (nums, target) {
  const n = nums.length;

  function dp(curr) {
    if (curr > target) return 0;
    if (curr === target) return 1;

    let res = 0;
    for (let i = 0; i < n; i++) {
      res += dp(curr + nums[i]);
    }
    return res;
  }
  return dp(0);
};

// Memoization
var combinationSum4 = function (nums, target) {
  const n = nums.length;
  const memo = new Array(target).fill(-1);

  function dp(curr) {
    if (curr > target) return 0;
    if (curr === target) return 1;
    if (memo[curr] !== -1) return memo[curr];

    let res = 0;
    for (let i = 0; i < n; i++) {
      res += dp(curr + nums[i]);
    }
    return (memo[curr] = res);
  }
  return dp(0);
};
// TC: O(n)
// SC: O(n)

// Tabulation
var combinationSum4 = function (nums, target) {
  const n = nums.length;
  const dp = new Array(target + 1).fill(0);

  dp[0] = 1;

  for (let i = 0; i < target + 1; i++) {
    for (let j = 0; j < n; j++) {
      if (nums[j] <= i) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }
  return dp[target];
};
// TC: O(n)
// SC: O(n)
