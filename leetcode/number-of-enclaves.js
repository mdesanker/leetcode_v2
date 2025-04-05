var numEnclaves = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function bfs(r, c) {
    const q = [[r, c]];
    while (q.length) {
      const len = q.length;
      for (let i = 0; i < len; i++) {
        const [r, c] = q.pop();
        grid[r][c] = 0;
        for (const [dr, dc] of dir) {
          const row = r + dr,
            col = c + dc;
          if (row < 0 || row >= rows || col < 0 || col >= cols) continue;
          if (grid[row][col] === 0) continue;
          q.push([row, col]);
        }
      }
    }
  }

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return;
    if (grid[r][c] === 0) return;

    grid[r][c] = 0;

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
        if (grid[r][c] === 1) bfs(r, c);
      }
    }
  }

  let count = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        count++;
      }
    }
  }
  return count;
};

// Time: O(n^2)
// Space: O(s) where s is size of largest enclave
