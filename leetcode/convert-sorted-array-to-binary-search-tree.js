var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  function buildTree(l, r) {
    const mid = l + Math.floor((r - l) / 2);
    const root = new TreeNode(nums[mid]);

    if (mid - 1 >= l) root.left = buildTree(l, mid - 1);
    if (mid + 1 <= r) root.right = buildTree(mid + 1, r);

    return root;
  }

  return buildTree(0, nums.length - 1);
};

// Time: O(n)
// Space: O(n)
