var decodeString = function (s) {
  const stack = [];
  for (const char of s) {
    if (char !== "]") stack.push(char);
    else {
      let currStr = "";
      while (stack[stack.length - 1] !== "[") {
        currStr = stack.pop() + currStr;
      }
      stack.pop();
      let currNum = "";
      while (stack.length > 0 && stack[stack.length - 1].match(/[0-9]/i)) {
        currNum = stack.pop() + currNum;
      }
      stack.push(currStr.repeat(currNum));
    }
  }
  return stack.join("");
};
// TC: O(n) where n it length of input str
// SC: O(n)
