var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 === 1) {
      return num.substring(0, i + 1);
    }
  }
  return "";
};

// Time: O(n)
// Space: O(1)
