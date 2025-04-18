// Djikstra's
var findCheapestPrice = function (n, flights, src, dst, k) {
  const adj = {};
  for (let i = 0; i < n; i++) adj[i] = [];
  for (const [s, d, p] of flights) {
    adj[s].push([d, p]);
  }

  const visited = new Set();
  const minHeap = new MinPriorityQueue((x) => x[1]);
  minHeap.enqueue([src, 0, 0]); // [node, price, stops]

  while (minHeap.size()) {
    const [n1, p1, s1] = minHeap.dequeue();
    if (s1 > k + 1) continue;

    const key = `${n1}#${p1}`;
    if (visited.has(key)) continue;
    visited.add(key);

    if (n1 === dst) return p1;

    for (const [n2, p2] of adj[n1]) {
      if (!visited[`${n2}#${p1 + p2}`]) {
        minHeap.enqueue([n2, p1 + p2, s1 + 1]);
      }
    }
  }
  return -1;
};

// Time: O((v + e) * log(v + e))
// Space: O(v + e)

// Bellman-Ford
var findCheapestPrice = function (n, flights, src, dst, k) {
  let prices = new Array(n).fill(Infinity);
  prices[src] = 0;

  for (let i = 0; i < k + 1; i++) {
    let tmp = prices.slice();
    for (const [s, d, p] of flights) {
      if (prices[s] === Infinity) continue;
      else if (prices[s] + p < tmp[d]) {
        tmp[d] = prices[s] + p;
      }
    }
    prices = tmp;
  }
  return prices[dst] === Infinity ? -1 : prices[dst];
};

// Time: O(e * k)
// Space: O(v)
