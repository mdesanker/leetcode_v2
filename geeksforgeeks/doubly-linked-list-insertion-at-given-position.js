class Solution {
  // Function to insert a new node at given position in doubly linked list.
  addNode(head, p, x) {
    // your code here
    let curr = head;
    // move to position p
    for (let i = 0; i < p; i++) {
      curr = curr.next;
    }
    // create and connect new node
    const node = new Node(x);
    let next = curr.next;

    curr.next = node;
    node.prev = curr;
    // in case at end of list
    if (next) {
      node.next = next;
      next.prev = node;
    }

    return head;
  }
}

// Time: O(n)
// Space: O(1)
