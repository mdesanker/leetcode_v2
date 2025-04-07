class Solution {
  deleteNode(head, x) {
    // code here
    // handle removing head
    if (x === 1) {
      head = head.next;
      return head;
    }

    // move to position
    let curr = head;
    for (let i = 1; i < x; i++) {
      curr = curr.next;
    }

    // if node to delete doesn't exist
    if (!curr) return head;

    // connect
    let prev = curr.prev;
    let next = curr.next;
    if (prev) prev.next = next;
    if (next) next.prev = prev;

    return head;
  }
}

// Time: O(n)
// Space: O(1)
