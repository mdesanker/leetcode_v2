// dfs
var floodFill = function (image, sr, sc, color) {
  const rows = image.length,
    cols = image[0].length;
  const target = image[sr][sc];

  if (target === color) return image;

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] !== target)
      return;

    image[r][c] = color;

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  dfs(sr, sc);
  return image;
};

// Time: O(rc)
// Space: O(rc)

// bfs
var floodFill = function (image, sr, sc, color) {
  const rows = image.length,
    cols = image[0].length;
  const target = image[sr][sc];

  if (target === color) return image;

  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const q = [[sr, sc]];
  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const [r, c] = q.shift();
      image[r][c] = color;

      for (const [dr, dc] of dir) {
        const row = r + dr,
          col = c + dc;
        if (row < 0 || row >= rows || col < 0 || col >= cols) continue;
        if (image[row][col] !== target) continue;
        q.push([row, col]);
      }
    }
  }
  return image;
};

// Time: O(rc)
// Space: O(rc)
