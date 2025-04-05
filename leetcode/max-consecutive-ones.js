// Sliding window
var findMaxConsecutiveOnes = function (nums) {
  let l = 0,
    r = 0,
    max = 0;
  while (r < nums.length) {
    const digit = nums[r];
    if (digit === 0) {
      l = r + 1;
    }
    max = Math.max(max, r - l + 1);
    r++;
  }
  return max;
};

// Time: O(n)
// Space: O(1)

// Alternate
var findMaxConsecutiveOnes = function (nums) {
  let max = 0,
    count = 0;
  for (const num of nums) {
    if (num === 1) count++;
    else if (num === 0) count = 0;
    max = Math.max(max, count);
  }
  return max;
};

// Time: O(n)
// Space: O(1)
