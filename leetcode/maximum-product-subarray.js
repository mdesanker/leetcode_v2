var maxProduct = function (nums) {
  let currMax = (currMin = res = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];

    let tempMax = Math.max(curr, curr * currMax, curr * currMin);
    currMin = Math.min(curr, curr * currMax, curr * currMin);
    currMax = tempMax;

    res = Math.max(currMax, res);
  }
  return res;
};
// TC: O(n)
// SC: O(1)
