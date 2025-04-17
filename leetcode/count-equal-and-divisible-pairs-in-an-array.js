var countPairs = function (nums, k) {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((i * j) % k === 0 && nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
};

// Time: O(n^2)
// Space: O(1)
