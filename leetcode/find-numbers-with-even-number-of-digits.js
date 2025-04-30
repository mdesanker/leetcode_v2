var findNumbers = function (nums) {
  let count = 0;
  for (const num of nums) {
    if (String(num).length % 2 === 0) count++;
  }
  return count;
};

// TC: O(n)
// SC: O(1)
