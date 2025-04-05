class Solution {
  // Function to count the occurrences of x in the array.
  countFreq(arr, target) {
    // your code here
    let count = 0;
    for (const num of arr) {
      if (num === target) count++;
    }
    return count;
  }
}

// Time: O(n)
// Space: O(1)

class Solution {
  // Function to count the occurrences of x in the array.
  countFreq(arr, target) {
    // your code here
    let l = 0,
      r = arr.length - 1,
      first = -1,
      last = -1;
    // first
    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);
      if (arr[mid] < target) {
        l = mid + 1;
      } else {
        if (arr[mid] === target) first = mid;
        r = mid - 1;
      }
    }
    // last
    (l = 0), (r = arr.length - 1);
    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);
      if (arr[mid] > target) {
        r = mid - 1;
      } else {
        if (arr[mid] === target) last = mid;
        l = mid + 1;
      }
    }
    return last === -1 || first === -1 ? 0 : last - first + 1;
  }
}

// Time: O(logn)
// Space: O(1)
