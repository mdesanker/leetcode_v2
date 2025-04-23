// Recursive (TLE)
var rob = function (nums) {
  function dp(i) {
    if (i >= nums.length) return 0;
    return Math.max(nums[i] + dp(i + 2), dp(i + 1));
  }
  return dp(0);
};

// Recursive - memoized
var rob = function (nums) {
  const n = nums.length;
  const memo = new Array(n).fill(-1);

  function dp(i) {
    if (i >= nums.length) return 0;

    if (memo[i] !== -1) return memo[i];

    return (memo[i] = Math.max(nums[i] + dp(i + 2), dp(i + 1)));
  }
  return dp(0);
};

// Tabulation
var rob = function (nums) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(0);

  dp[0] = 0;
  dp[1] = nums[0];

  for (let i = 2; i < n + 1; i++) {
    dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1]);
  }

  return dp[n];
};
// TC: O(n)
// SC: O(n)

// Tabulation - optimized
var rob = function (nums) {
  const n = nums.length;

  let one = 0;
  let two = nums[0];

  for (let i = 2; i < n + 1; i++) {
    let tmp = Math.max(nums[i - 1] + one, two);
    one = two;
    two = tmp;
  }

  return two;
};
// TC: O(n)
// SC: O(1)
