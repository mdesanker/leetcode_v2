class Solution {
  /**
  * @param number V
  * @param number[][] edges

  * @returns number[][]
  */
  getComponents(V, edges) {
    // code here
    const par = [];
    for (let i = 0; i < V; i++) par[i] = i;
    const rank = new Array(V).fill(1);

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

    for (const [i, j] of edges) {
      union(i, j);
    }

    // group nodes by parent
    const map = {};
    for (let i = 0; i < V; i++) {
      const p = find(i);
      map[p] = (map[p] || []).push(i);
    }
    return Object.values(map);
  }
}
