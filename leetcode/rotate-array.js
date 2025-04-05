// Brute force (TLE)
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};

// Time: O(n * k)
// Space: O(1)

var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  const temp = nums.slice(-k);

  for (let i = n - 1; i >= k; i--) {
    nums[i] = nums[i - k];
  }

  for (let i = 0; i < k; i++) {
    nums[i] = temp[i];
  }
};

// Time: O(n)
// Space: O(n)
