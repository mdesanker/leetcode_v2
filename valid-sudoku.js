// Brute force
var isValidSudoku = function (board) {
  const rows = board.length,
    cols = board[0].length;

  for (let row = 0; row < rows; row++) {
    let seen = new Set();
    for (let col = 0; col < cols; col++) {
      const cell = board[row][col];
      if (cell === ".") continue;
      if (seen.has(cell)) return false;
      seen.add(cell);
    }
  }

  for (let col = 0; col < cols; col++) {
    let seen = new Set();
    for (let row = 0; row < rows; row++) {
      const cell = board[row][col];
      if (cell === ".") continue;
      if (seen.has(cell)) return false;
      seen.add(cell);
    }
  }

  for (let square = 0; square < 9; square++) {
    let seen = new Set();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const row = Math.floor(square / 3) * 3 + i;
        const col = (square % 3) * 3 + j;
        const cell = board[row][col];
        if (cell === ".") continue;
        if (seen.has(cell)) return false;
        seen.add(cell);
      }
    }
  }

  return true;
};

// Time: O(n^2)
// Space: O(n^2)
