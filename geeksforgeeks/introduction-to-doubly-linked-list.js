class Solution {
  /**
  * @param number n
  * @param number[] arr

  * @returns Node
  */
  constructDLL(arr) {
    // code here
    const head = new Node();
    let curr = head;

    for (let i = 0; i < arr.length; i++) {
      const node = new Node(arr[i]);
      curr.next = node;
      node.prev = curr;
      curr = node;
    }
    return head.next;
  }
}

// Time: O(n)
// Space: O(1)
