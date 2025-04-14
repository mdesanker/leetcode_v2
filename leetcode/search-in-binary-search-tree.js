var searchBST = function (root, val) {
  if (!root || !val) return null;

  if (root.val === val) return root;

  if (val < root.val) return searchBST(root.left, val);
  else if (val > root.val) return searchBST(root.right, val);
};

// Time: O(logn) halve search space with each iteration
// Space: O(h) recursive stack equal to height of tree. n for skewed, logn for balanced
