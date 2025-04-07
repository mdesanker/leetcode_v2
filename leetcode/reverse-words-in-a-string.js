var reverseWords = function (s) {
  const words = [];
  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") word += s[i];
    else if (s[i] === " " && word.length > 0) {
      words.push(word);
      word = "";
    }
  }
  if (word.length > 0) words.push(word);
  return words.reverse().join(" ");
};

// Time: O(n)
// Space: O(n)

var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};

// Time: O(n)
// Space: O(n)
