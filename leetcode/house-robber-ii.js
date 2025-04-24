// Recursion (TLE)
var rob = function (nums) {
  const n = nums.length;

  function dp(i, nums) {
    if (i < 0) return 0;
    if (i === 0) return nums[0];

    return Math.max(nums[i] + dp(i - 2, nums), dp(i - 1, nums));
  }
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  return Math.max(dp(n - 2, nums.slice(0, -1)), dp(n - 2, nums.slice(1)));
};

// Recursion - memoization
var rob = function (nums) {
  const n = nums.length;

  function dp(i, nums, memo = {}) {
    if (i < 0) return 0;
    if (i === 0) return nums[0];

    if (i in memo) return memo[i];

    return (memo[i] = Math.max(
      nums[i] + dp(i - 2, nums, memo),
      dp(i - 1, nums, memo)
    ));
  }
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  return Math.max(dp(n - 2, nums.slice(0, -1)), dp(n - 2, nums.slice(1)));
};
// TC: O(n)
// SC: O(n)

// Tabulation
var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  function dp(nums) {
    const n = nums.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 0;
    dp[1] = nums[0];
    for (let i = 2; i < n + 1; i++) {
      dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1]);
    }
    return dp[n];
  }
  return Math.max(dp(nums.slice(0, -1)), dp(nums.slice(1)));
};
// TC: O(n)
// SC: O(n)

// Tabulation - optimized
var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  function dp(nums) {
    const n = nums.length;
    let one = 0;
    let two = nums[0];
    for (let i = 2; i < n + 1; i++) {
      let tmp = Math.max(nums[i - 1] + one, two);
      one = two;
      two = tmp;
    }
    return two;
  }
  return Math.max(dp(nums.slice(0, -1)), dp(nums.slice(1)));
};
// TC: O(n)
// SC: O(1)
