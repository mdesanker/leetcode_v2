var findPeakElement = function (nums) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    // must check that neighbor is not out of bounds
    const left = mid === 0 ? -Infinity : nums[mid - 1];
    const right = mid === nums.length - 1 ? -Infinity : nums[mid + 1];

    if (nums[mid] > left && nums[mid] > right) return mid;
    else if (nums[mid] > left) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
};

// Time: O(logn)
// Space: O(1)
