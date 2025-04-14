var minOperations = function (nums, k) {
  let set = new Set();
  let isInvalid = false;
  for (const num of nums) {
    if (num > k) set.add(num);
    if (num < k) isInvalid = true;
  }

  return isInvalid ? -1 : set.size;
};

// Time: O(n)
// Space: O(n)
