class Solution {
  // Function to find the minimum element in the given BST.
  minValue(root) {
    // your code here
    const nodes = [];
    function inorder(node) {
      if (!node) return null;
      inorder(node.left);
      nodes.push(node.data);
      inorder(node.right);
    }
    inorder(root);
    return nodes[0];
  }
}

// Time: O(logn)
// Space: O(h)
