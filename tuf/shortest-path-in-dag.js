class Solution {
  shortestPath(N, M, edges) {
    const res = new Array(N).fill(Infinity);
    res[0] = 0;
    const adj = {};
    for (let i = 0; i < N; i++) adj[i] = [];
    for (const [src, dst, wgt] of edges) {
      adj[src].push([dst, wgt]);
    }
    const visited = new Array(N).fill(false);
    const q = [[0, 0]];
    while (q.length) {
      const len = q.length;
      for (let i = 0; i < len; i++) {
        const [node, dist] = q.shift();
        visited[node] = true;
        res[node] = Math.min(res[node], dist);
        for (const [nei, wgt] of adj[node]) {
          if (!visited[nei]) {
            q.push([nei, dist + wgt]);
          }
        }
      }
    }
    return res.map((el) => (el === Infinity ? -1 : el));
  }
}

// Time: O(v + e)
// Space: O(v + e)
