// Topological Sort
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];

  const adj = {};
  for (let i = 0; i < n; i++) adj[i] = [];
  const indegrees = new Array(n).fill(0);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
    indegrees[a]++;
    indegrees[b]++;
  }

  const q = [];
  for (let i = 0; i < n; i++) {
    if (indegrees[i] === 1) {
      // only one neighbor means it is a leaf node
      q.push(i);
    }
  }

  while (n > 2) {
    // max number of centroids can be 2 for a MHT, graph theory
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      n--;
      for (const nei of adj[node]) {
        indegrees[nei]--;
        if (indegrees[nei] === 1) {
          q.push(nei);
        }
      }
    }
  }
  return q;
};

// TC: O(v + e)
// SC: O(v)
