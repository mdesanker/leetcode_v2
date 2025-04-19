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

// Union by rank
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const par = [];
  for (let i = 0; i < n; i++) par[i] = i;
  const rank = new Array(n).fill(1);

  function find(n) {
    if (n === par[n]) return n;
    return (par[n] = find(par[n]));
  }

  function union(n1, n2) {
    const p1 = find(n1),
      p2 = find(n2);
    // don't need to make new connection if already connected
    if (p1 === p2) return 0;
    // union by rank
    if (rank[p1] <= rank[p2]) {
      par[p1] = p2;
      rank[p2] += rank[p1];
    } else {
      par[p2] = p1;
      rank[p1] += rank[p2];
    }
    // return 1 for making new connection and reducing number of components by 1
    return 1;
  }

  let count = n;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (r !== c && isConnected[r][c] === 1) {
        count -= union(r, c);
      }
    }
  }
  return count;
};

// Time: O(n)
// Space: O(n)
