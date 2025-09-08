var getNoZeroIntegers = function (n) {
  for (let i = n - 1; i >= 1; i--) {
    if (i.toString().includes("0")) continue;
    if ((n - i).toString().includes("0")) continue;
    return [i, n - i];
  }
};
// TC: O(n ^ 2)
// SC: O(1)
