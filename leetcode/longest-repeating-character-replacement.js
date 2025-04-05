// Sliding window
var characterReplacement = function (s, k) {
  let start = 0,
    length = 0,
    mostFreq = 0,
    charMap = {};
  for (let end = 0; end < s.length; end++) {
    const rChar = s[end];
    charMap[rChar] = (charMap[rChar] || 0) + 1;
    mostFreq = Math.max(mostFreq, charMap[rChar]);

    while (end - start + 1 - mostFreq > k) {
      const lChar = s[start];
      charMap[lChar]--;
      start++;
    }

    length = Math.max(length, end - start + 1);
  }
  return length;
};

// Time: O(n)
// Space: O(n)
