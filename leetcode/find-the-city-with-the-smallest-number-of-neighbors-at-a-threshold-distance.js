var findTheCity = function (n, edges, distanceThreshold) {
  const adj = {};
  for (let i = 0; i < n; i++) adj[i] = [];
  for (const [f, t, w] of edges) {
    adj[f].push([t, w]);
    adj[t].push([f, w]);
  }

  // count number of cities within distanceThreshold from each node
  const res = new Array(n).fill(0);

  function find(src) {
    const visited = new Array(n).fill(false);
    const minHeap = new MinPriorityQueue((x) => x[1]);
    minHeap.enqueue([src, 0]);

    while (minHeap.size()) {
      const [n1, w1] = minHeap.dequeue();
      if (visited[n1]) continue;
      visited[n1] = true;
      if (n1 !== src && w1 <= distanceThreshold) res[src]++;
      for (const [n2, w2] of adj[n1]) {
        if (!visited[n2]) {
          minHeap.enqueue([n2, w1 + w2]);
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    find(i);
  }
  // find min count and greatest index of its occurrence
  const min = Math.min(...res);
  for (let i = n - 1; i >= 0; i--) {
    if (res[i] === min) return i;
  }
};

// Time: O(v * (v + e) * log(v + e))
// Space: O(v + e)
