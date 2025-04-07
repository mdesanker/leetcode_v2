var removeNthFromEnd = function (head, n) {
  // use dummy node in case need to remove the first node
  const dummy = new ListNode(0, head);
  let prev = dummy,
    curr = head;

  for (let i = 0; i < n; i++) {
    curr = curr.next;
  }

  while (curr) {
    prev = prev.next;
    curr = curr.next;
  }

  prev.next = prev.next.next;

  return dummy.next;
};

// Time: O(n)
// Space: O(1)
