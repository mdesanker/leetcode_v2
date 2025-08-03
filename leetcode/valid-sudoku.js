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

/**
Boxes are arranged like so
[0] [1] [2]
[3] [4] [5]
[6] [7] [8]
for (let i = 0; i < 9; i++) iterates through box index 0 - 8

Finding the top left of each box
Base row
Row 0: [0] [1] [2] -> Math.floor(i / 3) = 0 -> Starts in row 0
Row 1: [3] [4] [5] -> Math.floor(i / 3) = 1 -> Starts in row 3
Row 2: [6] [7] [8] -> Math.floor(i / 3) = 2 -> Starts in row 6

Base col
Col 0: [0] [3] [6] -> (i % 3) = 0 -> Starts in col 0
Col 1: [1] [4] [7] -> (i % 3) = 1 -> Starts in col 3
Col 2: [2] [5] [8] -> (i % 3) = 2 -> Starts in col 6

r and c to loop within 3x3 box
for (let r = 0; r < 3; r++) {
  for (let c = 0; c < 3; c++) {
    const row = baseRow + r;
    const col = baseCol + c;
  }
}

Summary:
const row = Math.floor(i / 3) * 3 + r
const col = (i % 3) * 3 + c
 */
