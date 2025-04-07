class Solution {
  insertAtEnd(head, x) {
    // code here
    const node = new Node(x);
    // head is null, return node
    if (!head) return node;

    // find end of list
    let curr = head;
    while (curr.next) {
      curr = curr.next;
    }
    // append node
    curr.next = node;
    return head;
  }
}

// Time: O(n)
// Space: O(1)
