var postorderTraversal = function (root) {
  const res = [];

  function dfs(node) {
    if (!node) return null;
    dfs(node.left);
    dfs(node.right);
    res.push(node.val);
  }

  dfs(root);
  return res;
};

// Time: O(n)
// Space: O(n)
