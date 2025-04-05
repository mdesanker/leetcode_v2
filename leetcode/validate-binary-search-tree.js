var isValidBST = function (root) {
  function dfs(node, lower, upper) {
    if (!node) return true;
    if (!(node.val > lower && node.val < upper)) return false;
    return dfs(node.left, lower, node.val) && dfs(node.right, node.val, upper);
  }
  return dfs(root, -Infinity, Infinity);
};

// Time: O(n)
// Space: O(n)
