// Two pointer
var moveZeroes = function (nums) {
  let l = 0;
  for (const num of nums) {
    if (num !== 0) {
      nums[l] = num;
      l++;
    }
  }
  while (l < nums.length) {
    nums[l] = 0;
    l++;
  }
  return nums;
};

// Time: O(n)
// Space: O(1)

// Alternate two pointer
var moveZeroes = function (nums) {
  let l = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[l], nums[i]] = [nums[i], nums[l]];
      l++;
    }
  }
  return nums;
};

// Time: O(n)
// Space: O(1)
