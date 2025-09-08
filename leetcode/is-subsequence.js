var isSubsequence = function (s, t) {
  if (!s.length && !t.length) return true;
  if (s.length && !t.length) return false;

  let p1 = 0,
    p2 = 0;
  while (p2 < t.length) {
    if (s[p1] === t[p2]) {
      p1++;
    }
    if (p1 === s.length) return true;
    p2++;
  }
  return false;
};
// TC: O(n)
// SC: O(1)
