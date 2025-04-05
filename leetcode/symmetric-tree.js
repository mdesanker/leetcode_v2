var isSymmetric = function (root) {
  function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
  }
  if (!root) return true;
  return isSameTree(root.left, root.right);
};

// Time: O(n)
// Space: O(n)
