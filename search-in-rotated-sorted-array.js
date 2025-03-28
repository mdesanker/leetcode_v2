// Binary search
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) return mid;
    // left half of nums is sorted
    if (nums[l] <= nums[mid]) {
      if (target >= nums[l] && target <= nums[mid]) {
        r = mid;
      } else {
        l = mid + 1;
      }
      // left half of nums is not sorted
    } else {
      if (target < nums[mid] || target > nums[r]) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
  }
  return nums[l] === target ? l : -1;
};

// Time: O(logn)
// Space: O(1)
