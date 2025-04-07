class Solution {
  // Function to find the length of a loop in the linked list.
  countNodesinLoop(head) {
    // your code here
    let count = 1;
    let slow = head,
      fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        // start count at 1 and slow at slow.next so that don't hit equality immediately
        slow = slow.next;
        while (slow !== fast) {
          count++;
          slow = slow.next;
        }
        return count;
      }
    }
    return 0;
  }
}

// Time: O(n)
// Space: O(1)
