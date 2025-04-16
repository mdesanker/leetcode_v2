var networkDelayTime = function (times, n, k) {
  const adj = {};
  for (let i = 1; i <= n; i++) adj[i] = [];
  for (const [src, dst, wt] of times) {
    adj[src].push([dst, wt]);
  }
  const visited = new Array(n + 1).fill(false);
  let count = 0;
  const minHeap = new MinPriorityQueue((x) => x[1]);
  minHeap.enqueue([k, 0]); // [node, time])
  while (minHeap.size()) {
    const [node, time] = minHeap.dequeue();
    if (visited[node]) continue;
    visited[node] = true;
    count++;
    if (count === n) return time;
    for (const [nei, wgt] of adj[node]) {
      if (!visited[nei]) {
        minHeap.enqueue([nei, time + wgt]);
      }
    }
  }
  return -1;
};

// Time: O(v + e)
// Space: O(v + e)
