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
