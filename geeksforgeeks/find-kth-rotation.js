// Brute force
class Solution {
  findKRotation(arr) {
    // Code Here
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    return minIndex;
  }
}

// Time: O(n)
// Space: O(1)

// Binary search
class Solution {
  findKRotation(arr) {
    // Code Here
    let l = 0,
      r = arr.length - 1,
      min = 0;
    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);
      if (arr[mid] <= arr[r]) {
        if (arr[mid] < arr[min]) {
          min = mid;
        }
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return min;
  }
}

// Time: O(logn)
// Space: O(1)
