var exist = function (board, word) {
  const rows = board.length,
    cols = board[0].length;
  const n = word.length;

  function backtrack(i, r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return false;
    if (board[r][c] !== word[i]) return false;
    if (i === n - 1) return true;

    let tmp = board[r][c];
    board[r][c] = 0;
    const isValid =
      backtrack(i + 1, r + 1, c) ||
      backtrack(i + 1, r - 1, c) ||
      backtrack(i + 1, r, c + 1) ||
      backtrack(i + 1, r, c - 1);
    board[r][c] = tmp;
    return isValid;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === word[0]) {
        if (backtrack(0, r, c)) return true;
      }
    }
  }
  return false;
};

// Time: O(r * c * 3^L) r * c to check each cell, 3^L because we can go 3 directions for each letter of word (after first letter)
// Space: O(L) call stack is equal to length of word
