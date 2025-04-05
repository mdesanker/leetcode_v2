var maxDepth = function (root) {
  function dfs(node) {
    if (!node) return 0;
    return 1 + Math.max(dfs(node.left), dfs(node.right));
  }
  return dfs(root);
};

// Time: O(n)
// Space: O(n)
