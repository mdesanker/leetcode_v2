class Solution {
  /**
   * Function to remove duplicates from unsorted linked list.
   * @param {Node} head
   * @returns {Node}
   */
  removeDuplicates(head) {
    // code here
    // return head after editing list
    let prev = head,
      curr = head.next;
    while (curr) {
      if (curr.data === prev.data) {
        let next = curr.next;
        prev.next = next;
        if (next) next.prev = prev;
        curr = next;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
    return head;
  }
}

// Time: O(n)
// Space: O(1)
