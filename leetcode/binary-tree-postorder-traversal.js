// Recursive
var postorderTraversal = function (root) {
  const res = [];
  if (!root) return res;
  function t(node) {
    if (!node) return null;
    t(node.left);
    t(node.right);
    res.push(node.val);
  }
  t(root);
  return res;
};

// Time: O(n)
// Space: O(h) logn for balanced, n for skewed

// Iterative - 2 stack
// Preorder traversal except push left before right, then reverse for postorder
var postorderTraversal = function (root) {
  const res = [];
  if (!root) return res;
  const stack1 = [root];
  const stack2 = [];
  while (stack1.length) {
    const node = stack1.pop();
    stack2.push(node.val);
    if (node.left) stack1.push(node.left);
    if (node.right) stack1.push(node.right);
  }
  while (stack2.length) {
    res.push(stack2.pop());
  }
  return res;
};

// Time: O(n)
// Space: O(2h) each stack is logn for balanced, n for skewed
