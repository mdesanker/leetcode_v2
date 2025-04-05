// Brute force
var missingNumber = function (nums) {
  const n = nums.length;
  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) return i;
  }
};

// Time: O(n^2)
// Space: O(1)

// Hash set
var missingNumber = function (nums) {
  const n = nums.length;
  const set = new Set(nums);
  for (let i = 0; i <= n; i++) {
    if (!set.has(i)) return i;
  }
};

// Time: O(n)
// Space: O(n)

// Math
var missingNumber = function (nums) {
  const n = nums.length;
  const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
  const expectedSum = (n * (n + 1)) / 2;
  return expectedSum - actualSum;
};

// Time: O(n)
// Space: O(1)
