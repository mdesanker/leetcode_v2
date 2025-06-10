var maxDifference = function (s) {
  let odd = -Infinity,
    even = Infinity;
  const map = {};
  for (const char of s) {
    map[char] = map[char] + 1 || 1;
  }
  for (const val of Object.values(map)) {
    if (val % 2 === 1) {
      odd = Math.max(odd, val);
    } else {
      even = Math.min(even, val);
    }
  }
  return odd - even;
};

// TC: O(n)
// SC: O(n)
