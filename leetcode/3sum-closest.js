var threeSumClosest = function (nums, target) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let res = Infinity,
    minDiff = Infinity;
  for (let i = 0; i < n; i++) {
    let l = i + 1,
      r = n - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      const diff = Math.abs(target - sum);
      if (diff < minDiff) {
        res = sum;
        minDiff = diff;
      }

      if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
};

// TC: O(n ^ 2)
// SC: O(n)
