var invertTree = function (root) {
  if (!root) return null;

  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

// Time: O(n) traverse every node once
// Space: O(n) recursive stack equal to height of tree - n for skewed, logn for balanced
