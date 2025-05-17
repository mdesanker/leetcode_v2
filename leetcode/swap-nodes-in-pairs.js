var swapPairs = function (head) {
  const dummy = new ListNode();
  dummy.next = head;

  let prev = dummy;

  while (head && head.next) {
    let first = head,
      second = head.next;

    prev.next = second;
    first.next = second.next;
    second.next = first;

    prev = first;
    head = first.next;
  }
  return dummy.next;
};

// TC: O(n)
// SC: O(1)
