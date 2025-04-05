// Stack
var evalRPN = function (tokens) {
  const stack = [];
  for (const char of tokens) {
    if (char === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (char === "-") {
      let a = stack.pop(),
        b = stack.pop();
      stack.push(b - a);
    } else if (char === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (char === "/") {
      let a = stack.pop(),
        b = stack.pop();
      stack.push(Math.trunc(b / a));
    } else {
      stack.push(Number(char));
    }
  }
  return stack[0];
};

// Time: O(n)
// Space: O(n)
