var findClosestElements = function (arr, k, x) {
  const compare = (a, b) => {
    if (a[1] < b[1]) return -1;
    else if (a[1] > b[1]) return 1;
    else {
      if (a[0] <= b[0]) return -1;
      else return 1;
    }
  };

  const minHeap = new PriorityQueue(compare);
  for (const val of arr) {
    minHeap.enqueue([val, Math.abs(val - x)]);
  }
  const res = [];
  for (let i = 0; i < k; i++) {
    res.push(minHeap.dequeue()[0]);
  }
  return res.sort((a, b) => a - b);
};

// TC: O(nlogn + nlogn) heap and sort result
// SC: O(n)

var findClosestElements = function (arr, k, x) {
  arr.sort((a, b) => {
    const a1 = Math.abs(a - x),
      b1 = Math.abs(b - x);
    return a1 === b1 ? a - b : a1 - b1;
  });
  return arr.slice(0, k).sort((a, b) => a - b);
};

// TC: O(nlogn + nlogn) heap and sort result
// SC: O(n)

// Binary search
// Using binary search to find the best starting index, l, for a subarray of length k
var findClosestElements = function (arr, k, x) {
  let l = 0;
  r = arr.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return arr.slice(l, l + k);
};

// TC: O(logn + k)
// SC: O(1)

/**
Imagine a sliding window of length k. You're testing whether it's better to shift this window left or right to get closer to x.
  * arr[mid] is the start of the window you're testing.
  * arr[mid + k] is one element past the end of this window (i.e., the next element that would enter the window if you moved it one step to the right).

So:
  * x - arr[mid]: the distance between x and the leftmost element of the current window.
  * arr[mid + k] - x: the distance between x and the next element after the window.

Check: if (x - arr[mid] > arr[mid + k] - x)

This means:
  * If arr[mid] is farther from x than arr[mid + k], then shifting the window right might give a better result.
  * So you do: l = mid + 1.

Otherwise:
  * Keep or shift window to the left, because it's currently closer.
  * So you do: r = mid - 1.
 */
