var canConstruct = function (ransomNote, magazine) {
  const dict = {};
  for (const char of magazine) {
    dict[char] = (dict[char] || 0) + 1;
  }
  for (const char of ransomNote) {
    if (!(char in dict) || dict[char] === 0) return false;
    else dict[char]--;
  }
  return true;
};

// Time: O(n + m)
// Space: O(n)
// n = magazine.length, m = ransomNote.length
