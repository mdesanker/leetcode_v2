var zeroFilledSubarray = function (nums) {
  let curr = 0,
    res = 0;
  for (const num of nums) {
    if (num === 0) {
      curr++;
      res += curr;
    } else {
      curr = 0;
    }
  }
  return res;
};
// TC: O(n)
// SC: O(1)
