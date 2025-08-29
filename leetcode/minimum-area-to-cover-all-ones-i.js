var minimumArea = function (grid) {
  const rows = grid.length,
    cols = grid[0].length;

  let left = cols - 1,
    right = 0,
    top = rows - 1,
    bottom = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        left = Math.min(left, c);
        top = Math.min(top, r);
        right = Math.max(right, c);
        bottom = Math.max(bottom, r);
      }
    }
  }

  return (right - left + 1) * (bottom - top + 1);
};
// TC: O(r * c)
// SC: O(1)
