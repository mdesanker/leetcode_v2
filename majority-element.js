// Sort
var majorityElement = function (nums) {
  nums.sort((a, b) => b - a);
  return nums[Math.floor(nums.length / 2)];
};

// Time: O(nlogn)
// Space: O(n)

// Hash map
var majorityElement = function (nums) {
  let res = nums[0];
  map = {};
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
    if (map[num] > map[res]) res = num;
  }
  return res;
};

// Time: O(n)
// Space: O(n)

// Boyer-Moore
var majorityElement = function (nums) {
  let count = 1,
    curr = nums[0];
  for (const num of nums) {
    if (curr === num) count++;
    else {
      if (count === 0) {
        curr = num;
        count++;
      } else count--;
    }
  }
  return curr;
};

// Time: O(n)
// Space: O(1)
