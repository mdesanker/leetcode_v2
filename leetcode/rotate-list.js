var rotateRight = function (head, k) {
  if (!head) return null;

  // count len of list
  let p1 = head,
    n = 1;
  while (p1.next) {
    n++;
    p1 = p1.next;
  }

  // create loop
  p1.next = head;

  let p2 = head;
  k = k % n;

  // find node before last k nodes of list
  for (let i = 0; i < n - k - 1; i++) {
    p2 = p2.next;
  }

  // set new head and break loop
  let newHead = p2.next;
  p2.next = null;
  return newHead;
};
// TC: O(n)
// SC: O(1)
