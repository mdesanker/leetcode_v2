/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  if (nums.length % 2 !== 0) {
    return false;
  }

  const count = {};

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let val of Object.values(count)) {
    if (val % 2 !== 0) {
      return false;
    }
  }

  return true;
};

// Time: O(n)
// Space: O(n)
