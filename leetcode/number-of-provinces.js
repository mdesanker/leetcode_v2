var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = new Array(n).fill(false);
  let count = 0;

  // dfs
  function dfs(node) {
    visited[node] = true;
    for (let j = 0; j < n; j++) {
      if (isConnected[node][j] === 1) {
        if (!visited[j]) {
          visited[j] = true;
          dfs(j);
        }
      }
    }
  }

  // bfs
  function bfs(node) {
    const q = [node];
    while (q.length) {
      const len = q.length;
      for (let i = 0; i < len; i++) {
        const curr = q.shift();
        visited[curr] = true;
        for (let j = 0; j < n; j++) {
          if (isConnected[curr][j] === 1) {
            if (!visited[j]) {
              q.push(j);
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      count++;
    }
  }
  return count;
};

// Time: O(n^2) traverse entire adjacency matrix
// Space: O(n) visited array
