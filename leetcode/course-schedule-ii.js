var findOrder = function (n, prereq) {
  const adj = {};
  for (let i = 0; i < n; i++) adj[i] = [];
  const indegrees = new Array(n).fill(0);
  for (const [crs, pre] of prereq) {
    adj[pre].push(crs);
    indegrees[crs]++;
  }
  const q = [];
  for (let i = 0; i < n; i++) {
    if (indegrees[i] === 0) {
      q.push(i);
    }
  }
  const res = [];
  while (q.length) {
    const node = q.shift();
    n--;
    res.push(node);
    for (const nei of adj[node]) {
      indegrees[nei]--;
      if (indegrees[nei] === 0) {
        q.push(nei);
      }
    }
  }
  return n === 0 ? res : [];
};

// Time: O(v + e)
// Space: O(v + e)
