// Memo
var minPathSum = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;
  const memo = new Array(rows).fill(0).map(() => new Array(cols).fill(-1));
  function dp(r, c) {
    if (r >= rows || c >= cols) return Infinity;
    if (r === rows - 1 && c === cols - 1) return grid[r][c];

    if (memo[r][c] !== -1) return memo[r][c];

    return (memo[r][c] = grid[r][c] + Math.min(dp(r + 1, c), dp(r, c + 1)));
  }
  return dp(0, 0);
};
// TC: O(r * c)
// SC: O(r * c)

// Tabulation
var minPathSum = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;
  const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  dp[0][0] = grid[0][0];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === 0 && c === 0) dp[r][c] = grid[0][0];
      else {
        let up = (left = Infinity);
        if (r > 0) up = dp[r - 1][c];
        if (c > 0) left = dp[r][c - 1];
        dp[r][c] = grid[r][c] + Math.min(up, left);
      }
    }
  }
  return dp[rows - 1][cols - 1];
};
// TC: O(r * c)
// SC: O(r * c)

// Tabulation - Space optimized
var minPathSum = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;
  let dp = new Array(cols).fill(0);
  dp[0] = grid[0][0];

  for (let r = 0; r < rows; r++) {
    let temp = new Array(cols).fill(0);
    for (let c = 0; c < cols; c++) {
      if (r === 0 && c === 0) temp[c] = grid[0][0];
      else {
        let up = (left = Infinity);
        if (r > 0) up = dp[c];
        if (c > 0) left = temp[c - 1];
        temp[c] = grid[r][c] + Math.min(up, left);
      }
    }
    dp = temp;
  }
  return dp[cols - 1];
};
// TC: O(r * c)
// SC: O(c)
