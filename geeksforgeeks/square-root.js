// Brute force
class Solution {
  floorSqrt(n) {
    // your code here
    let res = 1;
    while (res * res <= n) {
      res++;
    }
    return res - 1;
  }
}

// Time: O(n)
// Space: O(1)

// Binary search
class Solution {
  floorSqrt(n) {
    // your code here
    let l = 1,
      r = n,
      res = 1;
    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);
      if (mid * mid <= n) {
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
