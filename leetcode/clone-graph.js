// DFS
var cloneGraph = function (node) {
  if (!node) return null;
  const map = new Map();

  function dfs(node) {
    // check if clone of node already exists in map
    if (map.get(node)) return map.get(node);

    // node doesn't exist, create copy
    const copy = new Node(node.val);
    // point original to copy
    map.set(node, copy);
    // create clones of neighbors for node
    for (const nei of node.neighbors) {
      copy.neighbors.push(dfs(nei));
    }
    return copy;
  }
  return dfs(node);
};

// Time: O(n)
// Space: O(1) if not counting result in space complexity
