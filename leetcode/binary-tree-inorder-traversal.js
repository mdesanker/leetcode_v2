// Recursive
var inorderTraversal = function (root) {
  const res = [];
  if (!root) return res;
  function t(node) {
    if (!node) return null;
    t(node.left);
    res.push(node.val);
    t(node.right);
  }
  t(root);
  return res;
};

// Iterative
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  let curr = root;
  while (curr || stack.length) {
    // go left as possible
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    // pop and process
    curr = stack.pop();
    res.push(curr.val);
    // then go right
    curr = curr.right;
  }
  return res;
};

// Time: O(n)
// Space: O(h) logn for balanced, n for skewed
