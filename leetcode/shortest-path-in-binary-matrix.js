var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];
  const visited = new Array(n).fill(0).map(() => new Array(n).fill(false));
  if (grid[0][0] !== 0) return -1;
  let dist = 1;
  const q = [[0, 0]];
  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const [r, c] = q.shift();
      if (r === n - 1 && c === n - 1) return dist;
      if (visited[r][c]) continue;
      visited[r][c] = true;
      for (const [dr, dc] of dir) {
        const row = r + dr,
          col = c + dc;
        if (row < 0 || row >= n || col < 0 || col >= n) continue;
        if (visited[row][col]) continue;
        if (grid[row][col] !== 0) continue;
        q.push([row, col]);
      }
    }
    dist++;
  }
  return -1;
};

// Time: O(n^2)
// Space: O(n^2)
