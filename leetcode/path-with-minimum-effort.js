var minimumEffortPath = function (heights) {
  const rows = heights.length,
    cols = heights[0].length;
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
  minHeap.enqueue([0, 0, 0]); // [r, c, diff]
  while (minHeap.size()) {
    const [r, c, diff] = minHeap.dequeue();
    if (visited[r][c]) continue;
    visited[r][c] = true;
    if (r === rows - 1 && c === cols - 1) return diff;
    for (const [dr, dc] of dir) {
      const row = r + dr,
        col = c + dc;
      if (row < 0 || row >= rows || col < 0 || col >= cols) continue;
      if (visited[row][col]) continue;
      const newDiff = Math.max(
        diff,
        Math.abs(heights[r][c] - heights[row][col])
      );
      minHeap.enqueue([row, col, newDiff]);
    }
  }
  return -1;
};

// Time: O(r * c * log(r * c)) r * c to traverse every cell, log(r * c) for every enqueue operation. Potentially every cell in minHeap
// Space: O(r * c) visited array and minHeap
