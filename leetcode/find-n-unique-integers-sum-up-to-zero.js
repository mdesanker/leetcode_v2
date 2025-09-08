var sumZero = function (n) {
  const res = new Array(n).fill(0);
  let l = 0,
    r = n - 1;
  while (l < r) {
    res[l] = -n;
    res[r] = n;
    n--;
    l++;
    r--;
  }
  return res;
};
// TC: O(n)
// SC: O(1)
