// array method
class Solution {
  searchInSorted(arr, k) {
    // your code here
    return arr.includes(k);
  }
}

// Time: O(n)
// Space: O(1)

// linear search
class Solution {
  searchInSorted(arr, k) {
    // your code here
    for (const val of arr) {
      if (val === k) return true;
    }
    return false;
  }
}

// Time: O(n)
// Space: O(1)

// binary search
class Solution {
  searchInSorted(arr, k) {
    // your code here
    let l = 0,
      r = arr.length - 1;
    while (l < r) {
      const mid = l + Math.floor((r - l) / 2);
      if (arr[mid] === k) return true;
      else if (arr[mid] < k) l = mid + 1;
      else r = mid;
    }
    return arr[l] === k;
  }
}

// Time: O(logn)
// Space: O(1)
