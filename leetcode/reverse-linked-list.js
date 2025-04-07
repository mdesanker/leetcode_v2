// Iterative
var reverseList = function (head) {
  let curr = head,
    prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// Time: O(n)
// Space: O(1)

// Recursive
var reverseList = function (head) {
  if (!head) return null;

  let newHead = head;
  if (head.next) {
    newHead = reverseList(head.next);
    head.next.next = head;
  }
  head.next = null;
  return newHead;
};

// Time: O(n)
// Space: O(n)
