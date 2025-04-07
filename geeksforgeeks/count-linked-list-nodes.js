class Solution {
  // Function to count nodes of a linked list.
  getCount(head) {
    // Code here
    if (!head) return 0;
    let count = 1;
    let curr = head;
    while (curr.next) {
      curr = curr.next;
      count++;
    }
    return count;
  }
}

// Time: O(n)
// Space: O(1)
