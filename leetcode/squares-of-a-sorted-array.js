var sortedSquares = function (nums) {
  return nums.map((num) => num ** 2).sort((a, b) => a - b);
};

// Time: O(nlogn) for sort
// Space: O(n)
