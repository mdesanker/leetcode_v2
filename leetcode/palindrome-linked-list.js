// Fast and slow pointer
var isPalindrome = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  function reverse(node) {
    let curr = node,
      prev = null;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

  let p1 = head,
    p2 = reverse(slow);
  while (p1 && p2) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }
  return true;
};

// Time: O(n)
// Space: O(1)

// Brute force
var isPalindrome = function (head) {
  let curr = head;
  const vals = [];
  while (curr) {
    vals.push(curr.val);
    curr = curr.next;
  }
  let l = 0,
    r = vals.length - 1;
  while (l < r) {
    if (vals[l] !== vals[r]) return false;
    l++;
    r--;
  }
  return true;
};

// Time: O(n)
// Space: O(n)
