class Solution {
  // Function to return a list containing the DFS traversal of the graph.
  dfs(adj) {
    // code here
    const res = [];
    if (!adj.length) return res;
    const visited = new Array(adj.length).fill(false);

    function traverse(node) {
      if (visited[node]) return;

      res.push(node);
      visited[node] = true;

      for (const nei of adj[node]) {
        if (!visited[nei]) {
          traverse(nei);
        }
      }
    }
    traverse(0);
    return res;
  }
}

// Time: O(v) traverse every node once
// Space: O(v) visited array
