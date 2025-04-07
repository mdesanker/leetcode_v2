var deleteMiddle = function (head) {
  if (!head || !head.next) return null;
  // start slow back one node to get node right before the middle node
  const dummy = new ListNode(0, head);
  let slow = dummy,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = slow.next.next;

  return head;
};

// Time: O(n)
// Space: O(1)

var deleteMiddle = function (head) {
  // if only one node, return null
  if (!head || !head.next) return null;

  let slow = head,
    fast = head,
    prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = slow.next;

  return head;
};

// Time: O(n)
// Space: O(1)
