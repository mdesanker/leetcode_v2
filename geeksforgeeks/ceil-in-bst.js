class Solution {
    // Function to return the ceil of given number in BST.
    findCeil(root, input) {
        // your code here
        let min = Infinity;
        function dfs(node) {
            if (!node) return null;
            if (node.data === input) {
                min = node.data;
                return;
            }
            if (input < node.data) {
                min = Math.min(min, node.data);
                dfs(node.left);
            } else {
                dfs(node.right);
            }
        }
        dfs(root);
        return min === Infinity ? -1 : min;
    }
}

// Time: O(logn)
// Space: O(h)