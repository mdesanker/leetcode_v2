// Brute force
class Solution {
  getFloorAndCeil(x, arr) {
    // code here
    const infinity = Math.pow(2, 31) - 1;
    let min = -1,
      max = infinity;
    for (const val of arr) {
      if (val <= x) {
        min = Math.max(min, val);
      }
      if (val >= x) {
        max = Math.min(max, val);
      }
    }
    return max === infinity ? [min, -1] : [min, max];
  }
}

// Time: O(n)
// Space: O(1)

// Binary search
class Solution {
  getFloorAndCeil(x, arr) {
    // code here
    let l = 0,
      r = arr.length - 1,
      min = -1,
      max = -1;
    arr.sort((a, b) => a - b);
    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);
      if (arr[mid] >= x) {
        max = arr[mid];
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    (l = 0), (r = arr.length - 1);
    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);
      if (arr[mid] <= x) {
        min = arr[mid];
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return [min, max];
  }
}

// Time: O(nlogn + 2logn) - for array.sort and 2 binary search
// Space: O(n) - for array.sort
