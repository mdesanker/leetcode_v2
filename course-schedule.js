// bfs
var canFinish = function (n, prerequisites) {
  const adj = {};
  const indegrees = new Array(n).fill(0);
  for (let i = 0; i < n; i++) adj[i] = [];
  for (const [crs, pre] of prerequisites) {
    adj[pre].push(crs);
    indegrees[crs]++;
  }

  const q = [];
  for (let i = 0; i < n; i++) {
    if (indegrees[i] === 0) q.push(i);
  }

  while (q.length) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      n--;
      for (const nei of adj[node]) {
        indegrees[nei]--;
        if (indegrees[nei] === 0) {
          q.push(nei);
        }
      }
    }
  }
  return n === 0;
};

// Time: O(n + e) where n is number of courses and e is number of prereqs (directional graph)
// Space: O(n + e)
