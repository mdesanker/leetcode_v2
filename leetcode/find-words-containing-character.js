var findWordsContaining = function (words, x) {
  const res = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].indexOf(x) > -1) res.push(i);
  }
  return res;
};

var findWordsContaining = function (words, x) {
  const res = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) res.push(i);
  }
  return res;
};

// TC: O(n * m) n = words.length, m = words[0].length
// SC: O(1)
