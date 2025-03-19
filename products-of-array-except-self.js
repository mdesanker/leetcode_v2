// Brute force: not allowed because uses division
var productExceptSelf = function (nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        prod *= nums[j];
      }
    }
    res.push(prod);
  }

  return res;
};

// Time: O(n^2)
// Space: O(1)

var productExceptSelf = function (nums) {
  const res = [];

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    res.push(prefix);
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= postfix;
    postfix *= nums[j];
  }

  return res;
};

// Time: O(n)
// Space: O(1)
// Storing prefix and postfix in single value instead of array optimizes fron O(n) to O(1) space
