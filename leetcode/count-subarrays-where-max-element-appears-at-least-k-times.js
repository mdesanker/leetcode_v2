// Sliding window
var countSubarrays = function (nums, k) {
  const n = nums.length;
  const max = Math.max(...nums);
  let l = 0,
    r = 0,
    count = 0,
    maxCount = 0;
  while (r < n) {
    const rNum = nums[r];
    if (rNum === max) maxCount++;

    if (maxCount >= k) count += n - r;

    while (maxCount >= k) {
      const lNum = nums[l];
      if (lNum === max) maxCount--;
      if (maxCount >= k) count += n - r;
      l++;
    }
    r++;
  }
  return count;
};

// TC: O(n)
// SC: O(1)
