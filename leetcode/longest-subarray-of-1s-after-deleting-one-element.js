var longestSubarray = function (nums) {
  let l = 0,
    r = 0,
    max = 0,
    zeroCount = 0;
  while (r < nums.length) {
    const rChar = nums[r];
    if (rChar === 0) zeroCount++;
    r++;

    if (zeroCount <= 1) max = Math.max(max, r - l - zeroCount);

    if (zeroCount > 1) {
      const lChar = nums[l];
      if (lChar === 0) zeroCount--;
      l++;
    }
  }
  return zeroCount === 0 ? max - 1 : max;
};
// TC: O(n)
// SC: O(1)
