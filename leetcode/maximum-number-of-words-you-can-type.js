var canBeTypedWords = function (text, brokenLetters) {
  const set = new Set(brokenLetters.split(""));
  const words = text.split(" ");
  let count = 0;
  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      if (set.has(word[i])) {
        count++;
        break;
      }
    }
  }
  return words.length - count;
};
// TC: O(n * m) n = words.length, m = words[0].length
// SC: O(m)
