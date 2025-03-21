var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(0, null);
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  // if one list has a remainder
  tail.next = list1 || list2;
  return dummy.next;
};

// Time: O(min(n, m))
// Space: O(1)
