// Brute force
class Solution {
  findFloor(arr, x) {
    // your code here
    let res = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= x) {
        res = Math.max(res, i);
      }
    }
    return res;
  }
}

// Time: O(n)
// Space: O(1)

// Binary search
class Solution {
  findFloor(arr, x) {
    // your code here
    let l = 0,
      r = arr.length - 1,
      res = -1;
    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);
      if (arr[mid] <= x) {
        res = mid;
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return res;
  }
}

// Time: O(logn)
// Space: O(1)
