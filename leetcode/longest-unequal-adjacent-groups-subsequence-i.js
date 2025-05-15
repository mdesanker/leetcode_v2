// Greedy
var getLongestSubsequence = function (words, groups) {
  const n = words.length;
  const res = [words[0]];

  let curr = groups[0];
  for (let i = 1; i < n; i++) {
    if (groups[i] !== groups[i - 1]) {
      res.push(words[i]);
      curr = groups[i];
    }
  }
  return res;
};

// TC: O(n)
// SC: O(1)
