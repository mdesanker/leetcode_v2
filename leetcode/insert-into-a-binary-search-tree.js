// traverse left if val is smaller, right if val is greater
// when we get to an empty spot, insert the new node
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  if (val < root.val) root.left = insertIntoBST(root.left, val);
  else if (val > root.val) root.right = insertIntoBST(root.right, val);
  return root;
};

// Time: O(logn)
// Space: O(h)
