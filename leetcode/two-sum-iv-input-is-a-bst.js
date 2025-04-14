// Recursive
var findTarget = function (root, k) {
  const set = new Set();
  let res = false;
  function t(node) {
    if (!node) return null;

    const diff = k - node.val;
    if (set.has(diff)) {
      res = true;
      return;
    }
    set.add(node.val);

    if (node.left) t(node.left);
    if (node.right) t(node.right);
  }
  t(root);
  return res;
};

// Time: O(n)
// Space: O(h)

// Iterative
var findTarget = function (root, k) {
  const set = new Set();
  if (!root) return false;
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return false;
};

// Time: O(n)
// Space: O(h)
