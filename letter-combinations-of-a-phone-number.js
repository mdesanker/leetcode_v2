var letterCombinations = function (digits) {
  const n = digits.length;
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];
  if (digits.length === 0) return res;

  function backtrack(i, curr) {
    if (i === n) {
      res.push(curr);
      return;
    }

    for (const char of map[digits[i]]) {
      backtrack(i + 1, curr + char);
    }
  }

  backtrack(0, "");
  return res;
};

// Time: O(n * 4^n)
// Space: O(n)
// n is digits.length, and 4^n because there are max 4 options per digit
