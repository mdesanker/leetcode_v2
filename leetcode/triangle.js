// Memo - Object
var minimumTotal = function (triangle) {
  const rows = triangle.length;
  const memo = {};

  function dp(r, c) {
    if (c > r) return Infinity;
    if (r === rows - 1) return triangle[r][c];

    const key = `${r}#${c}`;
    if (key in memo) return memo[key];

    return (memo[key] =
      triangle[r][c] + Math.min(dp(r + 1, c), dp(r + 1, c + 1)));
  }
  return dp(0, 0);
};
// TC: O(r * c)
// SC: O(r * c)

// Memo - Array (TLE)
var minimumTotal = function (triangle) {
  const rows = triangle.length;
  const memo = [];
  for (let r = 0; r < rows; r++) memo.push(new Array(r + 1).fill(-1));

  function dp(r, c) {
    if (c > r) return Infinity;
    if (r === rows - 1) return triangle[r][c];

    if (memo[r][c] !== -1) return memo[r][c];

    return (memo[r][c] =
      triangle[r][c] + Math.min(dp(r + 1, c), dp(r + 1, c + 1)));
  }
  return dp(0, 0);
};
// TC: O(r * c)
// SC: O(r * c)

// Tabulation
var minimumTotal = function (triangle) {
  const rows = triangle.length;
  const dp = [];
  for (let r = 0; r < rows; r++) dp.push(new Array(r + 1).fill(0));
  dp[0][0] = triangle[0][0];

  for (let r = 1; r < rows; r++) {
    for (let c = 0; c < r + 1; c++) {
      let left = (up = Infinity);
      if (c > 0) left = dp[r - 1][c - 1];
      if (c < r) up = dp[r - 1][c];
      dp[r][c] = triangle[r][c] + Math.min(left, up);
    }
  }
  return Math.min(...dp[rows - 1]);
};
// TC: O(r * c)
// SC: O(r * c)

// Tabulation - Space optimized
var minimumTotal = function (triangle) {
  const rows = triangle.length;
  let dp = [[]];
  dp[0][0] = triangle[0][0];

  for (let r = 1; r < rows; r++) {
    let temp = new Array(r + 1).fill(0);
    for (let c = 0; c < r + 1; c++) {
      let left = (up = Infinity);
      if (c > 0) left = dp[c - 1];
      if (c < r) up = dp[c];
      temp[c] = triangle[r][c] + Math.min(left, up);
    }
    dp = temp;
  }
  return Math.min(...dp);
};
// TC: O(r * c)
// SC: O(c)

// Tabulation - Simpler
var minimumTotal = function (triangle) {
  const rows = triangle.length;
  const dp = [];
  for (let r = 0; r < rows; r++) dp.push(new Array(r + 1).fill(0));
  dp[rows - 1] = triangle[rows - 1];

  for (let r = rows - 2; r >= 0; r--) {
    for (let c = 0; c < r + 1; c++) {
      let down = (right = Infinity);
      down = dp[r + 1][c];
      right = dp[r + 1][c + 1];
      dp[r][c] = triangle[r][c] + Math.min(down, right);
    }
  }
  return dp[0][0];
};
// TC: O(r * c)
// SC: O(r * c)

// Tabulation - Space optimized
var minimumTotal = function (triangle) {
  const rows = triangle.length;
  let dp = triangle[rows - 1];

  for (let r = rows - 2; r >= 0; r--) {
    let temp = new Array(r + 1).fill(0);
    for (let c = 0; c < r + 1; c++) {
      let down = (right = Infinity);
      down = dp[c];
      right = dp[c + 1];
      temp[c] = triangle[r][c] + Math.min(down, right);
    }
    dp = temp;
  }
  return dp[0];
};
// TC: O(r * c)
// SC: O(c)
