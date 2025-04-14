class Solution {
  isCycle(V, edges) {
    // Code here
    const adj = {};
    for (let i = 0; i < V; i++) adj[i] = [];
    for (let [a, b] of edges) {
      adj[a].push(b);
      adj[b].push(a);
    }
    const visited = new Array(V).fill(false);
    function dfs(node, prev) {
      visited[node] = true;
      for (const nei of adj[node]) {
        if (!visited[nei]) {
          if (dfs(nei, node)) return true;
        } else if (prev !== nei) {
          // if visited and not prev node, then cycle
          return true;
        }
      }
      return false;
    }
    function bfs(node, prev) {
      const q = [[node, prev]];
      while (q.length) {
        const [node, prev] = q.shift();
        visited[node] = true;
        for (const nei of adj[node]) {
          if (!visited[nei]) {
            q.push([nei, node]);
          } else if (prev !== nei) {
            return true;
          }
        }
      }
      return false;
    }
    // check all components
    for (let i = 0; i < V; i++) {
      if (!visited[i]) {
        if (bfs(i, -1)) return true;
      }
    }
    return false;
  }
}

// Time: O(v + 2e) undirected, so each vertex has edge to and from it
// Space: O(v + 2e)
