var buildArray = function (nums) {
  const n = nums.length;
  const res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    res[i] = nums[nums[i]];
  }
  return res;
};

// TC: O(n)
// SC: O(1)
