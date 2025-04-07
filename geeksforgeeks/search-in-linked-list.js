class Solution {
  /**
   * @param {number} n
   * @param {Node} head
   * @param {number} key
   * @returns {boolean}
   */
  searchKey(n, head, key) {
    // Code here
    if (head.data === key) return true;

    let curr = head;
    while (curr.next) {
      curr = curr.next;
      if (curr.data === key) return true;
    }
    return false;
  }
}

// Time: O(n)
// Space: O(1)
