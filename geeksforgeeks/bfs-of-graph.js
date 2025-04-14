class Solution {
  // Function to return Breadth First Search Traversal of the given graph.
  bfs(adj) {
    // Code here
    const res = [];
    const visited = new Array(adj.length).fill(false);
    if (!adj.length) return res;
    const q = [0];
    while (q.length) {
      const len = q.length;
      for (let i = 0; i < len; i++) {
        const node = q.shift();
        if (visited[node]) continue;
        visited[node] = true;
        res.push(node);
        for (const nei of adj[node]) {
          if (!visited[nei]) {
            q.push(nei);
          }
        }
      }
    }
    return res;
  }
}

// Time: O(v) traverse every node once
// Space: O(v) for visited array
