var spiralOrder = function (matrix) {
  const rows = matrix.length,
    cols = matrix[0].length;
  let l = 0,
    r = cols - 1,
    t = 0,
    b = rows - 1;
  const res = [];
  let dir = 0;

  while (l <= r && t <= b) {
    if (dir === 0) {
      for (let i = l; i <= r; i++) {
        res.push(matrix[t][i]);
      }
      t++;
    } else if (dir === 1) {
      for (let i = t; i <= b; i++) {
        res.push(matrix[i][r]);
      }
      r--;
    } else if (dir === 2) {
      for (let i = r; i >= l; i--) {
        res.push(matrix[b][i]);
      }
      b--;
    } else if (dir === 3) {
      for (let i = b; i >= t; i--) {
        res.push(matrix[i][l]);
      }
      l++;
    }
    dir = (dir + 1) % 4;
  }
  return res;
};

// TC: O(rc)
// SC: O(rc)
