var backspaceCompare = function (s, t) {
  function process(string) {
    const stack = [];
    for (const char of string) {
      char === "#" ? stack.pop() : stack.push(char);
    }
    return stack.join("");
  }
  return process(s) === process(t);
};

// Time: O(n + m)
// Space: O(n + m)
