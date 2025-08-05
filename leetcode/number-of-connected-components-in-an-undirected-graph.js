function countComponents(n, edges) {
  const adj = {};
  for (let i = 0; i < n; i++) adj[i] = [];
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  const visited = new Array(n).fill(false);

  function dfs(node) {
    visited[node] = true;
    for (const nei of adj[node]) {
      if (!visited[nei]) {
        dfs(nei);
      }
    }
  }

  function bfs(node) {
    const q = [node];
    while (q.length) {
      const len = q.length;
      for (let i = 0; i < len; i++) {
        const node = q.shift();
        visited[node] = true;
        for (const nei of adj[node]) {
          if (!visited[nei]) {
            q.push(nei);
          }
        }
      }
    }
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      bfs(i);
    }
  }
  return count;
}
// TC: O(v + 2e)
// SC: O(v + e)

// Union find
function countComponents(n, edges) {
  const par = [];
  for (let i = 0; i < n; i++) par.push(i);
  const rank = new Array(n).fill(1);

  function find(n) {
    if (par[n] === n) return n;
    return (par[n] = find(par[n]));
  }

  function union(n1, n2) {
    const p1 = find(n1),
      p2 = find(n2);
    if (p1 === p2) return 0;
    if (rank[p1] > rank[p2]) {
      par[p2] = p1;
      rank[p1] += rank[p2];
    } else {
      par[p1] = p2;
      rank[p2] += rank[p1];
    }
    return 1;
  }

  let count = n;
  for (const [a, b] of edges) {
    count -= union(a, b);
  }
  return count;
}
// TC: O(v + 2e)
// SC: O(v + e)
