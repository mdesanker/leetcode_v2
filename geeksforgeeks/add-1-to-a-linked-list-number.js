class Solution {
  addOne(node) {
    function reverse(node) {
      let curr = node,
        prev = null;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      return prev;
    }

    // reverse list
    let head = reverse(node);

    // add one
    let curr = head;
    let carry = 1;
    while (carry) {
      curr.data += 1;
      // no carry, can return immediately
      if (curr.data < 10) return reverse(head);
      curr.data = 0;
      if (curr.next === null) break; // need to break to add new node
      // move to next node and add carry
      curr = curr.next;
    }
    curr.next = new Node(carry);

    // reverse and return
    return reverse(head);
  }
}

// Time: O(n)
// Space: O(1)
