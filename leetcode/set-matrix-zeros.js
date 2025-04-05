var setZeroes = function (matrix) {
  const rows = matrix.length,
    cols = matrix[0].length;

  function traverse(r, c) {
    for (let row = 0; row < rows; row++) {
      matrix[row][c] = 0;
    }
    for (let col = 0; col < cols; col++) {
      matrix[r][col] = 0;
    }
  }

  const q = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        q.push([r, c]);
      }
    }
  }
  for (const [r, c] of q) {
    traverse(r, c);
  }
};

// Time: O(n * m)
// Space: O(n * m) if every space is 0, q contains every space

var setZeroes = function (matrix) {
  const rows = matrix.length,
    cols = matrix[0].length;
  const markedRows = new Array(rows).fill(false);
  const markedCols = new Array(cols).fill(false);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        markedRows[r] = true;
        markedCols[c] = true;
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (markedRows[r] || markedCols[c]) {
        matrix[r][c] = 0;
      }
    }
  }
};

// Time: O(n * m)
// Space: O(n + m)
