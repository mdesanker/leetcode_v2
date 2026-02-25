var maxFreqSum = function (s) {
  const vowels = "aeiou";
  let vCount = 0,
    cCount = 0;
  const map = {};
  for (const char of s) {
    map[char] = map[char] + 1 || 1;
    if (vowels.includes(char)) vCount = Math.max(vCount, map[char]);
    else cCount = Math.max(cCount, map[char]);
  }
  return vCount + cCount;
};
// TC: O(n)
// SC: O(n)
