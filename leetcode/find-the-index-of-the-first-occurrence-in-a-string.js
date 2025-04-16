var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// Time: O(n)
// Space: O(1)

var strStr = function (haystack, needle) {
  if (!needle.length) return 0;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};

// Time: O(n)
// Space: O(1)
