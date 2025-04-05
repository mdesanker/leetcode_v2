// Brute force
class Solution {
  nthRoot(n, m) {
    // code here
    let res = 1;
    while (Math.pow(res, n) < m) {
      res++;
    }
    return Math.pow(res, n) === m ? res : -1;
  }
}

// Time: O(n)
// Space: O(1)

// Binary search
class Solution {
  nthRoot(n, m) {
    // code here
    let l = 1,
      r = m,
      res = -1;
    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);
      if (Math.pow(mid, n) === m) return (res = mid);
      if (Math.pow(mid, n) < m) {
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
