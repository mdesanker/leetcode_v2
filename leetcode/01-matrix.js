// bfs
var updateMatrix = function (mat) {
  const ROWS = mat.length,
    COLS = mat[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const visited = new Array(ROWS)
    .fill(0)
    .map(() => new Array(COLS).fill(false));
  const q = [];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (mat[r][c] === 0) {
        q.push([r, c]);
      }
    }
  }

  let dist = 0;
  while (q.length) {
    let len = q.length;
    for (let i = 0; i < len; i++) {
      const [r, c] = q.shift();
      if (visited[r][c]) continue;
      visited[r][c] = true;
      mat[r][c] = dist;

      for (const [dr, dc] of dir) {
        const row = r + dr,
          col = c + dc;
        if (row < 0 || row >= ROWS || col < 0 || col >= COLS) continue;
        if (visited[row][col]) continue;
        q.push([row, col]);
      }
    }
    dist++;
  }
  return mat;
};

// Time: O(n * m)
// Space: O(n * m)
