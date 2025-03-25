var inorderTraversal = function (root) {
  const res = [];

  function dfs(node) {
    if (!node) return null;
    dfs(node.left);
    res.push(node.val);
    dfs(node.right);
  }

  dfs(root);
  return res;
};

// Time: O(n)
// Space: O(n)
