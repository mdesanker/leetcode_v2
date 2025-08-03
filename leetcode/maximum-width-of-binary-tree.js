var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  const q = [[root, 0]];
  let max = 0;
  while (q.length) {
    const len = q.length,
      start = q[0][1],
      end = q[q.length - 1][1];
    max = Math.max(max, end - start + 1);
    for (let i = 0; i < len; i++) {
      let [node, pos] = q.shift();
      pos -= start; // normalize position to 0 for each row, so don't overflow numbers

      // position of child nodes
      // 0 -> 0, 1
      // 1 -> 2, 3
      // 2 -> 4, 5
      if (node.left) q.push([node.left, 2 * pos]);
      if (node.right) q.push([node.right, 2 * pos + 1]);
    }
  }
  return max;
};
// TC: O(n)
// SC: O(n)
