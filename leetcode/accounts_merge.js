var accountsMerge = function (accounts) {
  const n = accounts.length;

  const par = [];
  for (let i = 0; i < n; i++) par[i] = i;
  const rank = new Array(n).fill(1);

  function find(n) {
    if (par[n] === n) return n;
    return (par[n] = find(par[n]));
  }

  function union(n1, n2) {
    const p1 = find(n1),
      p2 = find(n2);
    if (p1 === p2) return false;
    if (rank[p1] >= rank[p2]) {
      par[p2] = p1;
      rank[p1] += rank[p2];
    } else {
      par[p1] = p2;
      rank[p2] += rank[p1];
    }
    return true;
  }

  /**
   * map stores: email -> first account index that had it
   * email already seen in another account, therefore accounts belong to same person
   */
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const [name, ...emails] = accounts[i];
    for (const email of emails) {
      if (!map.has(email)) map.set(email, i);
      // union current account to the account where email was first seen: map.get(email);
      else union(i, map.get(email));
    }
  }

  /**
   * group emails by root parent
   * find parent of each email, add email to set for parent's index
   */
  const combined = new Array(n);
  for (const [email, index] of map) {
    const parent = find(index);
    if (!combined[parent]) combined[parent] = new Set();
    combined[parent].add(email);
  }

  /**
   * build final result
   * name from accounts[i][0] is safe because problem guarantees same name for merged accounts
   */
  const res = [];
  for (let i = 0; i < n; i++) {
    if (!combined[i]) continue;
    const name = accounts[i][0];
    res.push([name, ...Array.from(combined[i]).sort()]);
  }
  return res;
};
/**
TC:
    find() = O(a(n)) = inverse Ackermann function
        Grows so slowly, it's <5 for any practical input size -> effectively O(1)
    Total edge processing:
        Each union: O(a(n))
        All edges: O(Ea(n))

    Building map + unions: O(E a(n))
    Grouping emails: O(E a(n))
    Sorting emails: O(ElogE) built in sort
    
    Final: O(ElogE)

SC:
    DSU arrays: O(n)
    Map: O(E)
    Combined sets: O(E)

    Final: O(n + E)
 */
