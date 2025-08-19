// Memo
var uniquePathsWithObstacles = function (obstacleGrid) {
  const rows = obstacleGrid.length,
    cols = obstacleGrid[0].length;
  const memo = new Array(rows).fill(0).map(() => new Array(cols).fill(-1));

  function dp(r, c) {
    if (r >= rows || c >= cols) return 0;
    if (obstacleGrid[r][c] === 1) return 0;
    if (r === rows - 1 && c === cols - 1) return 1;

    if (memo[r][c] !== -1) return memo[r][c];

    return (memo[r][c] = dp(r + 1, c) + dp(r, c + 1));
  }
  return dp(0, 0);
};
// TC: O(r * c)
// SC: O(r * c)

var uniquePathsWithObstacles = function (obstacleGrid) {
  const rows = obstacleGrid.length,
    cols = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1) return 0;
  const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
  dp[0][0] = 1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === 0 && c === 0) dp[r][c] = 1;
      else if (obstacleGrid[r][c] === 1) dp[r][c] = 0;
      else {
        let left = (up = 0);
        if (r > 0) up = dp[r - 1][c];
        if (c > 0) left = dp[r][c - 1];
        dp[r][c] = left + up;
      }
    }
  }
  return dp[rows - 1][cols - 1];
};
// TC: O(r * c)
// SC: O(r * c)

var uniquePathsWithObstacles = function (obstacleGrid) {
  const rows = obstacleGrid.length,
    cols = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1) return 0;
  let dp = new Array(cols).fill(0);
  dp[0] = 1;

  for (let r = 0; r < rows; r++) {
    let temp = new Array(cols).fill(0);
    for (let c = 0; c < cols; c++) {
      if (r === 0 && c === 0) temp[c] = 1;
      else if (obstacleGrid[r][c] === 1) temp[c] = 0;
      else {
        let left = (up = 0);
        if (r > 0) up = dp[c];
        if (c > 0) left = temp[c - 1];
        temp[c] = left + up;
      }
    }
    dp = temp;
  }
  return dp[cols - 1];
};
// TC: O(r * c)
// SC: O(c)
