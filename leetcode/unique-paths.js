// Memo
var uniquePaths = function (m, n) {
  const memo = new Array(m).fill(0).map(() => new Array(n).fill(-1));
  function dp(i, j) {
    if (i >= m || j >= n) return 0;
    if (i === m - 1 && j === n - 1) {
      return 1;
    }

    if (memo[i][j] !== -1) return memo[i][j];

    return (memo[i][j] = dp(i + 1, j) + dp(i, j + 1));
  }
  return dp(0, 0);
};
// TC: O(m * n)
// SC: O(m * n)

// Tabulation
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) dp[i][j] = 1;
      else {
        let left = 0,
          up = 0;
        if (i > 0) up = dp[i - 1][j];
        if (j > 0) left = dp[i][j - 1];
        dp[i][j] = up + left;
      }
    }
  }
  return dp[m - 1][n - 1];
};
// TC: O(m * n)
// SC: O(m * n)

// Tabulation - Space optimized
var uniquePaths = function (m, n) {
  let dp = new Array(n).fill(0);
  dp[0] = 1;
  for (let i = 0; i < m; i++) {
    let temp = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) temp[j] = 1;
      else {
        let left = 0,
          up = 0;
        if (i > 0) up = dp[j];
        if (j > 0) left = temp[j - 1];
        temp[j] = up + left;
      }
    }
    dp = temp;
  }
  return dp[n - 1];
};
// TC: O(m * n)
// SC: O(n)
