var longestPalindrome = function (s) {
  const map = {};
  for (const char of s) {
    map[char] = (map[char] || 0) + 1;
  }
  let res = 0;
  for (count of Object.values(map)) {
    res += Math.floor(count / 2) * 2;
  }
  return s.length > res ? res + 1 : res;
};

// Time: O(n)
// Space: O(n)
