class Solution {
  reverseDLL(head) {
    // code here
    // automatically handles empty list and single node
    let curr = head,
      prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      curr.prev = next;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}

// Time: O(n)
// Space: O(1)
