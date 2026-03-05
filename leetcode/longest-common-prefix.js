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

var longestCommonPrefix = function (strs) {
  let pre = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let curr = "";
    for (let j = 0; j < Math.min(pre.length, strs[i].length); j++) {
      if (pre[j] === strs[i][j]) curr += pre[j];
      else break;
    }
    pre = curr;
  }
  return pre;
};
// TC: O(n * m)
// SC: O(m)

// Binary search
var longestCommonPrefix = function (strs) {
  function isCommonPrefix(strs, len) {
    let pre = strs[0].slice(0, len);
    for (let i = 1; i < strs.length; i++) {
      if (!strs[i].startsWith(pre)) return false;
    }
    return true;
  }

  let minLen = Infinity;
  for (const str of strs) minLen = Math.min(minLen, str.length);
  let l = 1,
    r = minLen;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (isCommonPrefix(strs, mid)) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return strs[0].slice(0, l - 1);
};
// TC: O(n * logm)
// SC: O(m)
