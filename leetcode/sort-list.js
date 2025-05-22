// Selection sort (TLE)
var sortList = function (head) {
  if (!head) return null;

  const list = [];
  let curr = head;
  while (curr) {
    list.push(curr.val);
    curr = curr.next;
  }

  const n = list.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (list[j] < list[min]) {
        min = j;
      }
    }
    [list[min], list[i]] = [list[i], list[min]];
  }

  const dummy = new ListNode(0);
  curr = dummy;

  for (let i = 0; i < n; i++) {
    curr.next = new ListNode(list[i]);
    curr = curr.next;
  }
  return dummy.next;
};

// TC: O(n^2)
// SC: O(n)

// Heap
var sortList = function (head) {
  if (!head) return null;

  const minHeap = new MinPriorityQueue();
  let curr = head;
  while (curr) {
    minHeap.enqueue(curr.val);
    curr = curr.next;
  }

  const dummy = new ListNode();
  curr = dummy;
  while (minHeap.size()) {
    curr.next = new ListNode(minHeap.dequeue());
    curr = curr.next;
  }
  return dummy.next;
};

// TC: O(n logn)
// SC: O(n)
