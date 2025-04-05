// Stack
var isValid = function (s) {
  const stack = [],
    map = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
  for (const char of s) {
    if (char in map) {
      if (map[char] !== stack.pop()) return false;
    } else stack.push(char);
  }
  return stack.length === 0;
};

// Time: O(n)
// Space: O(n)
