var solve = function (board) {
  const rows = board.length,
    cols = board[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // dfs
  function dfs(r, c, target) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) return;
    if (board[r][c] !== "O") return;
    board[r][c] = target;
    dfs(r + 1, c, target);
    dfs(r - 1, c, target);
    dfs(r, c + 1, target);
    dfs(r, c - 1, target);
  }

  // bfs - TLE unless use q.pop() instead of q.shift()
  function bfs(r, c, target) {
    const q = [[r, c]];
    while (q.length) {
      const len = q.length;
      for (let i = 0; i < len; i++) {
        const [r, c] = q.pop();
        board[r][c] = target;
        for (const [dr, dc] of dir) {
          const row = r + dr,
            col = c + dc;
          if (row < 0 || row >= rows || col < 0 || col >= cols) continue;
          if (board[row][col] !== "O") continue;
          q.push([row, col]);
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
        if (board[r][c] === "O") bfs(r, c, "M");
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === "O") board[r][c] = "X";
      else if (board[r][c] === "M") board[r][c] = "O";
    }
  }
};

// Time: O(r * c)
// Space: O(s) where s is size of largest surrounded island for size of recursive stack
