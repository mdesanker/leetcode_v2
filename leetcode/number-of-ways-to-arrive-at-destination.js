var countPaths = function (n, roads) {
  const MOD = 10 ** 9 + 7;

  const adj = {};
  for (let i = 0; i < n; i++) adj[i] = [];
  for (const [src, dst, wgt] of roads) {
    adj[src].push([dst, wgt]);
    adj[dst].push([src, wgt]);
  }

  const dist = new Array(n).fill(Infinity);
  const ways = new Array(n).fill(0);
  dist[0] = 0;
  ways[0] = 1;

  const minHeap = new MinPriorityQueue((x) => x[1]);
  minHeap.enqueue([0, 0]);

  while (minHeap.size()) {
    const [node, currDist] = minHeap.dequeue();
    if (currDist > dist[node]) continue;

    for (const [nei, wgt] of adj[node]) {
      const newDist = currDist + wgt;
      if (newDist < dist[nei]) {
        dist[nei] = newDist;
        // seeing nei for first time through shorter path
        // only way to reach nei is through ways to reach node
        ways[nei] = ways[node];
        minHeap.enqueue([nei, newDist]);
      } else if (newDist === dist[nei]) {
        // find another path to nei with same shortest distance
        // can also get here through ways to node, so add
        ways[nei] = (ways[nei] + ways[node]) % MOD;
      }
    }
  }
  return ways[n - 1];
};

// Time: O(v + 2e)
