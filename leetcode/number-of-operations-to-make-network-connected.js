var makeConnected = function (n, connections) {
  // minimum connections is n - 1
  // if less that this, cannot create connected network
  if (connections.length < n - 1) return -1;

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
    if (p1 === p2) return 0;
    if (rank[p1] <= rank[p2]) {
      par[p1] = p2;
      rank[p2] += rank[p1];
    } else {
      par[p2] = p1;
      rank[p1] += rank[p2];
    }
    return 1;
  }

  let count = n;
  for (const [u, v] of connections) {
    count -= union(u, v);
  }
  // count is number of components after union
  // to find number of connections until only 1 component, subtract 1
  return count - 1;
};
