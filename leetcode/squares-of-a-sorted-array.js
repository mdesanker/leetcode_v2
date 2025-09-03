var sortedSquares = function (nums) {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
};

// Time: O(nlogn) for sort
// Space: O(n)

// Two Pointer
var sortedSquares = function (nums) {
  const n = nums.length;
  const res = new Array(n).fill(0);
  let index = n - 1;
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const lVal = nums[l] ** 2;
    const rVal = nums[r] ** 2;
    if (lVal >= rVal) {
      res[index] = lVal;
      l++;
    } else {
      res[index] = rVal;
      r--;
    }
    index--;
  }
  return res;
};
// TC: O(n)
// SC: O(1)

// Two pointer approach works because the input array is sorted. We know the largest squared value will either be at the beginning or end of the array
