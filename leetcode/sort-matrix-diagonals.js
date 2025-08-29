var sortMatrix = function (grid) {
  const n = grid.length;

  for (let r = 0; r < n; r++) {
    let diag = [];
    for (let i = 0; i < n - r; i++) {
      diag.push(grid[r + i][i]);
    }
    diag.sort((a, b) => b - a);
    for (let i = 0; i < n - r; i++) {
      grid[r + i][i] = diag[i];
    }
  }

  for (let c = 1; c < n; c++) {
    let diag = [];
    for (let i = 0; i < n - c; i++) {
      diag.push(grid[i][c + i]);
    }
    diag.sort((a, b) => a - b);
    for (let i = 0; i < n - c; i++) {
      grid[i][c + i] = diag[i];
    }
  }
  return grid;
};
// TC: O(n^2 * logn)
// SC: O(n)
