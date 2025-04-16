class Solution {
  shortestPath(edges, N, M) {
    const res = new Array(N).fill(Infinity);
    const visited = new Array(N).fill(false);
    res[0] = 0;
    const adj = {};
    for (let i = 0; i < N; i++) adj[i] = [];
    for (const [st, en] of edges) {
      adj[st].push(en);
      adj[en].push(st);
    }
    const q = [[0, 0]];
    while (q.length) {
      const len = q.length;
      for (let i = 0; i < len; i++) {
        const [node, dist] = q.shift();
        visited[node] = true;
        res[node] = Math.min(res[node], dist);
        for (const nei of adj[node]) {
          if (!visited[nei]) {
            q.push([nei, dist + 1]);
          }
        }
      }
    }
    return res;
  }
}

// Time: O(v + 2e)
// Space: O(v + 2e)
