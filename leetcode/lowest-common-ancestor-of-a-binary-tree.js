var lowestCommonAncestor = function (root, p, q) {
  // base case
  // root undefined -> return null
  // if we find a node, return the node
  if (!root || root.val === p.val || root.val === q.val) return root;

  // recursive steps to search for p and q
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // combine results
  // if we find nodes in left and right branch, then the current root is the LCA
  // if only one side is non-null, return that side (both p and q are in that subtree)
  return left && right ? root : left || right;
};

// TC: O(n) traverse every node once
// SC: O(n) recursive stack = height of tree. O(n) for skewed tree, O(logn) for balanced tree

// modification if p or q might not exist in the tree
var lowestCommonAncestor = function (root, p, q) {
  let foundP = false;
  let foundQ = false;

  function helper(node) {
    if (!node) return null;

    const left = helper(node.left);
    const right = helper(node.right);

    if (node.val === p.val) {
      foundP = true;
      return node;
    }

    if (node.val === q.val) {
      foundQ = true;
      return node;
    }

    if (left && right) return node;
    return left || right;
  }

  const lca = helper(root);
  return foundP && foundQ ? lca : null;
};
