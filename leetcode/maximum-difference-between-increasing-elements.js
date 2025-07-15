// Brute force
var maximumDifference = function (nums) {
  const n = nums.length;
  let max = -1;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] < nums[j]) {
        max = Math.max(max, nums[j] - nums[i]);
      }
    }
  }
  return max;
};

// TC: O(n ^ 2)
// SC: O(1)

// Single pass
var maximumDifference = function (nums) {
  const n = nums.length;
  let max = -1,
    l = 0,
    r = 1;
  while (r < n) {
    if (nums[l] < nums[r]) max = Math.max(max, nums[r] - nums[l]);
    else if (nums[r] < nums[l]) l = r;
    r++;
  }
  return max;
};

// TC: O(n)
// SC: O(1)
