var isBipartite = function (graph) {
  const n = graph.length;
  const colors = new Array(n).fill(-1);

  function dfs(node) {
    for (const nei of graph[node]) {
      if (colors[nei] === colors[node]) return false;
      else if (colors[nei] === -1) {
        colors[nei] = 1 - colors[node];
        if (!dfs(nei)) return false;
      }
    }
    return true;
  }

  function bfs(node) {
    const q = [node];
    while (q.length) {
      const len = q.length;
      for (let i = 0; i < len; i++) {
        const node = q.shift();
        for (const nei of graph[node]) {
          if (colors[nei] === -1) {
            colors[nei] = 1 - colors[node];
            q.push(nei);
          } else if (colors[nei] === colors[node]) return false;
        }
      }
    }
    return true;
  }

  for (let i = 0; i < n; i++) {
    if (colors[i] === -1) {
      colors[i] = 0;
      if (!dfs(i)) return false;
    }
  }
  return true;
};

// Time: O(v + 2e)
// Space: O(v + 2e)
