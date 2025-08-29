var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  // cannot fill memo with -1 because negative numbers are possible values in matrix
  const memo = new Array(n).fill(0).map(() => new Array(n).fill("a"));
  function dp(r, c) {
    if (c < 0 || c >= n) return Infinity;
    if (r === n - 1) return matrix[r][c];
    if (memo[r][c] !== "a") return memo[r][c];

    let res = Infinity;
    for (let i = -1; i < 2; i++) {
      res = Math.min(res, matrix[r][c] + dp(r + 1, c + i));
    }
    return (memo[r][c] = res);
  }
  let res = Infinity;
  for (let i = 0; i < n; i++) {
    res = Math.min(res, dp(0, i));
  }
  return res;
};
// TC: O(r * c)
// SC: O(r * c)

var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  dp[n - 1] = matrix[n - 1];

  for (let r = n - 2; r >= 0; r--) {
    for (let c = 0; c < n; c++) {
      let left = Infinity,
        mid = Infinity,
        right = Infinity;
      if (c > 0) left = dp[r + 1][c - 1];
      mid = dp[r + 1][c];
      if (c < n - 1) right = dp[r + 1][c + 1];
      dp[r][c] = matrix[r][c] + Math.min(left, mid, right);
    }
  }
  return Math.min(...dp[0]);
};
// TC: O(r * c)
// SC: O(r * c)

var minFallingPathSum = function (matrix) {
  const n = matrix.length;
  let dp = matrix[n - 1];

  for (let r = n - 2; r >= 0; r--) {
    let temp = new Array(n).fill(0);
    for (let c = 0; c < n; c++) {
      let left = Infinity,
        mid = Infinity,
        right = Infinity;
      if (c > 0) left = dp[c - 1];
      mid = dp[c];
      if (c < n - 1) right = dp[c + 1];
      temp[c] = matrix[r][c] + Math.min(left, mid, right);
    }
    dp = temp;
  }
  return Math.min(...dp);
};
// TC: O(r * c)
// SC: O(c)
