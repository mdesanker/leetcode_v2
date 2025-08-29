// Brute
var canPartition = function (nums) {
  const n = nums.length;
  const sum = nums.reduce((a, c) => a + c, 0);
  if (sum % 2 === 1) return false;
  const target = sum / 2;

  function dp(i, j) {
    if (j === 0) return true;
    if (i === 0) return nums[i] === j;

    let notTake = dp(i - 1, j);
    let take = false;
    if (j >= nums[i]) {
      take = dp(i - 1, j - nums[i]);
    }
    return take || notTake;
  }
  return dp(n - 1, target);
};
// TC: O(2 ^ n)
// SC: O(n)

// Memoization
var canPartition = function (nums) {
  const n = nums.length;
  const sum = nums.reduce((a, c) => a + c, 0);
  if (sum % 2 === 1) return false;
  const target = sum / 2;

  const memo = new Array(n).fill(0).map(() => new Array(target + 1).fill(-1));

  function dp(i, j) {
    if (j === 0) return true;
    if (i === 0) return nums[i] === j;

    if (memo[i][j] !== -1) return memo[i][j];

    let notTake = dp(i - 1, j);
    let take = false;
    if (j >= nums[i]) {
      take = dp(i - 1, j - nums[i]);
    }
    return (memo[i][j] = take || notTake);
  }
  return dp(n - 1, target);
};
// TC: O(n * target)
// SC: O(n * target)

// Tabulation
var canPartition = function (nums) {
  const n = nums.length;
  const sum = nums.reduce((a, c) => a + c, 0);
  if (sum % 2 === 1) return false;
  const target = sum / 2;

  const dp = new Array(n).fill(0).map(() => new Array(target + 1).fill(false));
  for (let i = 0; i < n; i++) dp[i][0] = true;
  dp[0][nums[0]] = true;

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < target + 1; j++) {
      let notTake = dp[i - 1][j];
      let take = false;
      if (j >= nums[i]) {
        take = dp[i - 1][j - nums[i]];
      }
      dp[i][j] = take || notTake;
    }
  }
  return dp[n - 1][target];
};
// TC: O(n * target)
// SC: O(n * target)

// Tabulation - Space optimized
var canPartition = function (nums) {
  const n = nums.length;
  const sum = nums.reduce((a, c) => a + c, 0);
  if (sum % 2 === 1) return false;
  const target = sum / 2;

  let dp = new Array(target + 1).fill(false);
  for (let i = 0; i < n; i++) dp[0] = true;
  dp[nums[0]] = true;

  for (let i = 1; i < n; i++) {
    let temp = new Array(target + 1).fill(false);
    temp[0] = true;
    for (let j = 1; j < target + 1; j++) {
      let notTake = dp[j];
      let take = false;
      if (j >= nums[i]) {
        take = dp[j - nums[i]];
      }
      temp[j] = take || notTake;
    }
    dp = temp;
  }
  return dp[target];
};
// TC: O(n * target)
// SC: O(target)
