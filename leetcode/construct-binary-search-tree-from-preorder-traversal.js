var bstFromPreorder = function (preorder) {
  // base case
  if (!preorder.length) return null;

  // create new root
  const root = new TreeNode(preorder[0]);

  // find split between left and right nodes
  let mid = 0;
  for (let i = 1; i < preorder.length; i++) {
    if (preorder[i] < preorder[0]) mid = i;
  }

  root.left = bstFromPreorder(preorder.slice(1, mid + 1));
  root.right = bstFromPreorder(preorder.slice(mid + 1));

  return root;
};

// Time: O(n)
// Space: O(h)
