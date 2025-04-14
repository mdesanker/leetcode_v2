var generateParenthesis = function (n) {
  const res = [];

  function backtrack(openN, closedN, curr) {
    if (openN === n && closedN === n) {
      res.push(curr);
      return;
    }

    if (openN < n) {
      backtrack(openN + 1, closedN, curr + "(");
    }
    if (closedN < openN) {
      backtrack(openN, closedN + 1, curr + ")");
    }
  }

  backtrack(0, 0, "");
  return res;
};

// Time: O(4^n / sqrt(n));
// Space: O(4^n / sqrt(n) * n);
