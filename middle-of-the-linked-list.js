// Fast and slow pointer
var middleNode = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// Time: O(n)
// Space: O(1)
