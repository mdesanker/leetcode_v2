var maxSum = function (nums) {
  if (Math.max(...nums) < 0) return Math.max(...nums);

  const set = new Set();
  let sum = 0;
  for (const num of nums) {
    if (set.has(num)) continue;
    else {
      if (num > 0) {
        sum += num;
        set.add(num);
      }
    }
  }
  return sum;
};

// TC: O(n)
// SC: O(n)
