var isBalanced = function (root) {
  function dfs(node) {
    if (!node) return [0, true];

    const left = dfs(node.left);
    const right = dfs(node.right);

    const isBalanced = left[1] && right[1] && Math.abs(left[0] - right[0]) <= 1;

    return [1 + Math.max(left[0], right[0]), isBalanced];
  }
  return dfs(root)[1];
};

// Time: O(n)
// Space: O(n)
