var countPartitions = function (nums) {
  const totalSum = nums.reduce((a, c) => a + c, 0);
  let currSum = 0,
    count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    currSum += nums[i];
    const diff = currSum - (totalSum - currSum);
    if (diff % 2 === 0) count++;
  }
  return count;
};
// TC: O(n)
// SC: O(1)
