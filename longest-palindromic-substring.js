// Two pointer
var longestPalindrome = function (s) {
  let len = 0,
    res = "";
  // iterate through string treating each index as center of a palindrome
  for (let i = 0; i < s.length; i++) {
    // odd length palindrome
    let l = i,
      r = i;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > len) {
        len = r - l + 1;
        res = s.slice(l, r + 1);
      }
      l--;
      r++;
    }
    // even length palindrome
    (l = i), (r = i + 1);
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > len) {
        len = r - l + 1;
        res = s.slice(l, r + 1);
      }
      l--;
      r++;
    }
  }
  return res;
};

// Time: O(n^2)
// Space: O(1)
