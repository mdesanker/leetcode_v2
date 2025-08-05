// Prefix sum + hash map
var subarraySum = function (nums, k) {
  let count = 0,
    currSum = 0;
  const map = {};
  map[0] = 1;

  for (const num of nums) {
    currSum += num;
    count += map[currSum - k] || 0;
    map[currSum] = map[currSum] + 1 || 1;
  }
  return count;
};
// TC: O(n)
// SC: O(n)

/**
If we want to find if there is a subarray that sums to k, we’re looking for any earlier prefix sum such that:

currSum - previousSum = k
→ previousSum = currSum - k

This means:
If we know currSum now, and we’ve previously seen a prefix sum equal to currSum - k,
then the elements in between must add up to exactly k.
 */
