// This is more of "assume identity of the next node and then skip the next node"
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

// Time: O(1)
// Space: O(1)
