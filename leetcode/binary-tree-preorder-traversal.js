var preorderTraversal = function (root) {
  const res = [];

  function dfs(node) {
    if (!node) return null;
    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return res;
};

// Time: O(n)
// Space: O(n)

// Iterative - stack
var preorderTraversal = function (root) {
  const res = [];
  if (!root) return res;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return res;
};

// Time: O(n)
// Space: O(n) stack length is max width of tree
