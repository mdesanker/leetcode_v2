// DFS
var maxAreaOfIsland = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;
  let max = 0;

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return 0;
    if (grid[r][c] !== 1) return 0;

    grid[r][c] = 0;

    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        max = Math.max(max, dfs(r, c));
      }
    }
  }
  return max;
};

// Time: O(r * c)
// Space: O(r * c)
