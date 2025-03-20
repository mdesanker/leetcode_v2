// Sliding window
var lengthOfLongestSubstring = function (s) {
  let start = 0,
    length = 0,
    charMap = {};
  for (let end = 0; end < s.length; end++) {
    const rightChar = s[end];
    // charMap stores the last occurence of a character
    // if we have rightChar in object already, move left pointer to space after rightChar
    if (rightChar in charMap) {
      start = Math.max(start, charMap[rightChar] + 1);
    }
    charMap[rightChar] = end;
    length = Math.max(length, end - start + 1);
  }
  return length;
};

// Time: O(n)
// Space: O(n)
