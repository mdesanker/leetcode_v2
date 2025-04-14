// Sliding window
var minimumOperations = function (nums) {
  const n = nums.length;
  const map = {};
  for (let i = n - 1; i >= 0; i--) {
    const char = nums[i];
    if (map.hasOwnProperty(char)) return Math.ceil((i + 1) / 3);
    else map[char] = 1;
  }
  return 0;
};

// Time: O(n)
// Space: O(n)
