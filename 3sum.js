// Two pointer
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum < 0) j++;
      else if (sum > 0) k--;
      else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      }
    }
  }
  return res;
};

// Time: O(n^2)
// Space: O(1)
