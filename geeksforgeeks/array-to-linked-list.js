class Solution {
  // Function to construct linked list from given array.
  construct(arr) {
    // your code here
    const head = new Node();
    let curr = head;
    for (let i = 0; i < arr.length; i++) {
      const node = new Node(arr[i]);
      curr.next = node;
      curr = node;
    }
    return head.next;
  }
}

// Time: O(n)
// Space: O(1)
