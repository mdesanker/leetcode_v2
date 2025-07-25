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

var sortedArrayToBST = function (nums) {
  function buildTree(l, r) {
    if (l > r) return null;

    const mid = l + Math.floor((r - l) / 2);
    const node = new TreeNode(nums[mid]);

    node.left = buildTree(l, mid - 1);
    node.right = buildTree(mid + 1, r);

    return node;
  }
  return buildTree(0, nums.length - 1);
};

// TC: O(n)
// SC: O(n)
