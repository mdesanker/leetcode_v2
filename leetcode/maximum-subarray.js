// Brute force

// TC: O(n ^ 2)
// SC: O(1)

// Kadane's Algorithm
var maxSubArray = function (nums) {
  let currSum = nums[0],
    max = currSum;
  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], nums[i]);
    max = Math.max(max, currSum);
  }
  return max;
};

// TC: O(n)
// SC: O(1)
