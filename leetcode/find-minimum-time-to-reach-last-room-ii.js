// Djikstra's
var minTimeToReach = function (moveTime) {
  const rows = moveTime.length,
    cols = moveTime[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const visited = new Array(rows)
    .fill(0)
    .map(() => new Array(cols).fill(false));

  const minHeap = new MinPriorityQueue((x) => x[2]);
  minHeap.enqueue([0, 0, 0, true]); // [r, c, w]

  while (minHeap.size) {
    const [r, c, w, s] = minHeap.dequeue();
    if (visited[r][c]) continue;
    visited[r][c] = true;

    if (r === rows - 1 && c === cols - 1) return w;

    for (const [dr, dc] of dir) {
      const row = r + dr,
        col = c + dc;
      if (row < 0 || row >= rows || col < 0 || col >= cols) continue;
      if (visited[row][col]) continue;

      const dist = Math.max(w, moveTime[row][col]) + (s ? 1 : 2);
      minHeap.enqueue([row, col, dist, !s]);
    }
  }
};

// TC: O(rc * log(rc))
// SC: O(rc)
