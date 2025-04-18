// Djikstra's
var networkDelayTime = function (times, n, k) {
  const adj = {};
  for (let i = 0; i < n + 1; i++) adj[i] = []; // O(v)
  for (const [u, v, w] of times) {
    // O(e)
    adj[u].push([v, w]);
  }

  const visited = new Array(n + 1).fill(false); // O(v)
  const minHeap = new MinPriorityQueue((x) => x[1]);
  minHeap.enqueue([k, 0]);

  let count = 0;

  while (minHeap.size()) {
    const [n1, t1] = minHeap.dequeue();
    if (visited[n1]) continue;
    visited[n1] = true;
    count++;
    if (count === n) return t1;
    for (const [n2, t2] of adj[n1]) {
      if (!visited[n2]) {
        minHeap.enqueue([n2, t1 + t2]); // O(log(v))
      }
    }
  }
  return -1;
};

// Time: O((v + e) * logv)
// Space: O(v + e)

// Bellman-Ford
var networkDelayTime = function (times, n, k) {
  let res = new Array(n + 1).fill(Infinity);
  res[k] = 0;

  for (let i = 0; i < n; i++) {
    let tmp = res.slice();
    for (const [s, d, t] of times) {
      if (res[s] === Infinity) continue;
      else if (res[s] + t < tmp[d]) {
        tmp[d] = res[s] + t;
      }
    }
    res = tmp;
  }
  let minTime = Math.max(...res.slice(1));
  return minTime === Infinity ? -1 : minTime;
};

// Time: O(v * e)
// Space: O(v)
