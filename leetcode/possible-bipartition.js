var possibleBipartition = function (n, dislikes) {
  const color = new Array(n + 1).fill(-1);

  const adj = {};
  for (let i = 0; i < n + 1; i++) adj[i] = [];
  for (const [a, b] of dislikes) {
    adj[a].push(b);
    adj[b].push(a);
  }

  function dfs(node) {
    for (const nei of adj[node]) {
      if (color[nei] === color[node]) return false;
      else if (color[nei] === -1) {
        color[nei] = 1 - color[node];
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
        for (const nei of adj[node]) {
          if (color[nei] === color[node]) return false;
          else if (color[nei] === -1) {
            color[nei] = 1 - color[node];
            q.push(nei);
          }
        }
      }
    }
    return true;
  }

  for (let i = 1; i < n + 1; i++) {
    if (color[i] === -1) {
      color[i] = 0;
      if (!bfs(i)) return false;
    }
  }
  return true;
};

// Time: O(v + 2e)
// Space: O(v + 2e)
