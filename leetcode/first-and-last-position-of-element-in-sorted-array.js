// Brute force
var searchRange = function (nums, target) {
  const INFINITY = Math.pow(2, 31) - 1;
  let first = INFINITY,
    last = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      first = Math.min(first, i);
      last = Math.max(last, i);
    }
  }
  return first === INFINITY ? [-1, last] : [first, last];
};

// Time: O(n)
// Space: O(1)

// Binary search
var searchRange = function (nums, target) {
  let l = 0,
    r = nums.length - 1,
    first = -1,
    last = -1;
  // find first
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      if (nums[mid] === target) first = mid;
      r = mid - 1;
    }
  }
  // find last
  (l = 0), (r = nums.length - 1);
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      if (nums[mid] === target) last = mid;
      l = mid + 1;
    }
  }
  return [first, last];
};

// Time: O(logn)
// Space: O(1)
