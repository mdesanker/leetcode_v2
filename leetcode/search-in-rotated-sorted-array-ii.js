var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) return true;
    // if duplicates are at both ends, can't tell which side is sorted
    if (nums[l] === nums[mid]) {
      l++;
      continue;
    }
    // left sorted
    if (nums[l] <= nums[mid]) {
      if (target >= nums[l] && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
      // right sorted
    } else {
      if (target > nums[mid] && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return false;
};

// Time: O(logn)
// Space: O(1)
