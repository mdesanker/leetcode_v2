var maxDepth = function (s) {
  const stack = [];
  let depth = 0;
  for (const char of s) {
    if (char === "(") {
      stack.push(char);
      depth = Math.max(depth, stack.length);
    } else if (char === ")") {
      stack.pop();
    }
  }
  return depth;
};

// Time: O(n)
// Space: O(n)

var maxDepth = function (s) {
  let count = 0,
    max = 0;
  for (const char of s) {
    if (char === "(") {
      count++;
      max = Math.max(max, count);
    } else if (char === ")") count--;
  }
  return max;
};

// Time: O(n)
// Space: O(1)
