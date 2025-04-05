var numIslands = function (grid) {
  const ROWS = grid.length,
    COLS = grid[0].length;
  let count = 0;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(r, c) {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
    if (grid[r][c] === "0") return;

    grid[r][c] = "0";

    for (const [dr, dc] of dir) {
      const row = r + dr,
        col = c + dc;
      dfs(row, col);
    }
  }

  // TLE with q.shift() because O(n) operation
  // Can be swapped with q.pop() in this case and pass because we are not relying on level-order or shortest-path properties of BFS
  function bfs(r, c) {
    const q = [[r, c]];
    while (q.length) {
      const len = q.length;
      for (let i = 0; i < len; i++) {
        const [r, c] = q.pop();
        grid[r][c] = "0";
        for (const [dr, dc] of dir) {
          const row = r + dr,
            col = c + dc;
          if (row < 0 || row >= ROWS || col < 0 || col >= COLS) continue;
          if (grid[row][col] === "0") continue;
          q.push([row, col]);
        }
      }
    }
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === "1") {
        count++;
        bfs(r, c);
      }
    }
  }

  return count;
};

// Time: O(r * c)
// Space: O(1)
