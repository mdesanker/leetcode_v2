var orangesRotting = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;
  const visited = new Array(rows)
    .fill(0)
    .map(() => new Array(cols).fill(false));
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let fresh = 0;
  const q = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) q.push([r, c]);
      if (grid[r][c] === 1) fresh++;
    }
  }

  let time = 0;
  while (q.length && fresh) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const [r, c] = q.shift();
      if (visited[r][c]) continue;
      visited[r][c] = true;
      for (const [dr, dc] of dir) {
        const row = r + dr,
          col = c + dc;
        if (row < 0 || row >= rows || col < 0 || col >= cols) continue;
        if (visited[row][col]) continue;
        if (grid[row][col] !== 1) continue;
        q.push([row, col]);
        grid[row][col] = 2;
        fresh--;
      }
    }
    time++;
  }
  return fresh === 0 ? time : -1;
};

// Time: O(r * c)
// Space: O(r * c)
