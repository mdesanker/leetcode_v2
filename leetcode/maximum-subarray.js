// Brute (TLE)
var maxSubArray = function (nums) {
  const n = nums.length;
  let max = nums[0];
  for (let i = 0; i < n; i++) {
    let curr = 0;
    for (let j = i; j < n; j++) {
      curr += nums[j];
      max = Math.max(max, curr);
    }
  }
  return max;
};
// TC: O(n^2)
// SC: O(1)

// Kadane's Algorithm
var maxSubArray = function (nums) {
  let curr = nums[0],
    max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // at each number, is it better to start fresh with each number or do we extend the previous subarray ending just before it
    curr = Math.max(nums[i], curr + nums[i]);
    max = Math.max(max, curr);
  }
  return max;
};
// TC: O(n)
// SC: O(1)
