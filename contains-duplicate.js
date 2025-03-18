// Brute force: TLE
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const num1 = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];

      if (num1 === num2) {
        return true;
      }
    }
  }

  return false;
};

// Time: O(n^2)
// Space: O(1)

// Hash map
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const count = {};

  for (let num of nums) {
    if (count.hasOwnProperty(num)) {
      return true;
    }

    count[num] = 1;
  }

  return false;
};

// Time: O(n)
// Space: O(n)
