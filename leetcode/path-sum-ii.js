var pathSum = function (root, targetSum) {
  const res = [];

  function dfs(node, curr, total) {
    if (!node) return null;

    curr.push(node.val);
    total += node.val;

    if (!node.left && !node.right) {
      if (total === targetSum) {
        res.push(curr.slice());
        return;
      }
    }

    dfs(node.left, curr.slice(), total);
    dfs(node.right, curr.slice(), total);
    return;
  }
  dfs(root, [], 0);
  return res;
};

// TC: O(n)
// SC: O(n) for skewed tree, O(logn for balanced tree)
