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

var swapPairs = function (head) {
  const dummy = new ListNode();
  dummy.next = head;

  let prev = dummy,
    curr = head;

  while (curr && curr.next) {
    let first = curr,
      second = curr.next;

    first.next = second.next;
    prev.next = second;
    second.next = first;

    (prev = first), (curr = prev.next);
  }
  return dummy.next;
};
// TC: O(n)
// SC: O(1)
