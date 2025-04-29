var countSubarrays = function (nums) {
  const n = nums.length;
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] === (nums[i - 1] + nums[i + 1]) * 2) count++;
  }
  return count;
};

// Time: O(n)
// Space: O(n)
