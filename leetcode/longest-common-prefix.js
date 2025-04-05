var longestCommonPrefix = function (strs) {
  strs.sort((a, b) => a.length - b.length);
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
    }
  }
  return prefix;
};

// Time: O(n * m + nlogn) - n * m for nested loops, nlogn for sort
// Space: O(n) - for sort
// n = strs.length, m = strs[0].length
