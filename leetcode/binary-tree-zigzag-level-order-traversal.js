var zigzagLevelOrder = function (root) {
  const res = [];
  if (!root) return res;
  let q = [],
    dir = 1;
  q.push(root);
  while (q.length) {
    let len = q.length,
      level = [];
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      dir === 1 ? level.push(node.val) : level.unshift(node.val);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    res.push(level);
    dir *= -1;
  }
  return res;
};

// Time: O(n)
// Space: O(n)
