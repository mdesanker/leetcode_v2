// Build array from inorder traversal
var kthSmallest = function (root, k) {
  const nodes = [];

  function inorder(node) {
    if (!node) return null;
    inorder(node.left);
    nodes.push(node.val);
    inorder(node.right);
  }
  inorder(root);
  return nodes[k - 1];
};

// Time: O(n)
// Space: O(n)

// Inorder traversal with count
var kthSmallest = function (root, k) {
  let counter = 0;
  let val = null;

  function inorder(node) {
    if (!node) return null;
    inorder(node.left);
    counter++;
    if (counter === k) {
      val = node.val;
      return;
    }
    inorder(node.right);
  }
  inorder(root);
  return val;
};

// Time: O(k)
// Space: O(1)
