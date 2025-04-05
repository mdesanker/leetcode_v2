// Brute force
var searchInsert = function (nums, target) {
  let res = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
    else if (nums[i] < target) {
      res = i;
    }
  }
  return res + 1;
};

// Time: O(n)
// Space: O(1)

// Binary search
var searchInsert = function (nums, target) {
  let l = 0,
    r = nums.length - 1,
    res = -1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) {
      return (res = mid);
    }
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
};

// Time: O(logn)
// Space: O(1)
