var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  function dfs(node, currSum) {
    if (!node) return false;

    if (!node.left && !node.right) {
      return currSum + node.val === targetSum;
    }

    return (
      dfs(node.left, currSum + node.val) || dfs(node.right, currSum + node.val)
    );
  }
  return dfs(root, 0);
};

// TC: O(n)
// SC: O(n) for skewed tree
