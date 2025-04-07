var oddEvenList = function (head) {
  if (!head) return null;
  // save head of even list to connect halves
  let odd = head,
    even = head.next,
    evenHead = even;
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  // connect halves
  odd.next = evenHead;
  return head;
};

// Time: O(n)
// Space: O(1)
