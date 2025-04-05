var diameterOfBinaryTree = function (root) {
  let max = 0;

  function dfs(node) {
    if (!node) return 0;
    const l = dfs(node.left);
    const r = dfs(node.right);
    // check height of path using current node as root
    max = Math.max(max, l + r);
    // return height of longest path from curren node
    return 1 + Math.max(l, r);
  }

  dfs(root);
  return max;
};

// Time: O(n)
// Space: O(n)
