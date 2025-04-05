// Brute force
var maximumTripletValue = function (nums) {
  const n = nums.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      for (k = j + 1; k < n; k++) {
        res = Math.max(res, (nums[i] - nums[j]) * nums[k]);
      }
    }
  }
  return res;
};

// Time: O(n^3)
// Space: O(1)
