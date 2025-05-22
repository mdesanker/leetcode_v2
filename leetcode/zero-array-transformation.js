// TLE
var isZeroArray = function (nums, queries) {
  const n = nums.length;
  const diff = new Array(n).fill(0);
  for (const [s, e] of queries) {
    for (let i = s; i <= e; i++) {
      diff[i]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (diff[i] < nums[i]) return false;
  }
  return true;
};
// TC: O(n^2)
// SC: O(n)
