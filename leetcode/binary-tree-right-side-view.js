var rightSideView = function (root) {
  const res = [];
  if (!root) return res;
  const q = [root];
  while (q.length) {
    const len = q.length,
      level = [];
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      level.push(node.val);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    res.push(level.pop());
  }
  return res;
};

// Time: O(n)
// Space: O(n) space to store level if not including result array
