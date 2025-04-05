// Brute force
var findMin = function (nums) {
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
  }
  return min;
};

// Time: O(n)
// Space: O(1)

// Binary search
var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1,
    res = nums[0];
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] <= nums[r]) {
      res = Math.min(res, nums[mid]);
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return res;
};

// Time: O(logn)
// Space: O(1)
