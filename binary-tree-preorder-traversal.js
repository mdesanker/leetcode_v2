var preorderTraversal = function (root) {
  const res = [];

  function dfs(node) {
    if (!node) return null;
    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return res;
};

// Time: O(n)
// Space: O(n)
