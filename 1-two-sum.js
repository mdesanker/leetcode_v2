// Brute force
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];

      if (num1 + num2 === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

// Time: O(n^2)
// Space: O(1)

// Hash map
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (hash.hasOwnProperty(diff)) {
      return [i, hash[diff]];
    }

    hash[nums[i]] = i;
  }
  return [-1, -1];
};

// Time: O(n)
// Space: O(n)
