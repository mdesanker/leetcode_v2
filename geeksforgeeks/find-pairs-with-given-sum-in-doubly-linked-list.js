class Solution {
  // Function to find pairs in the linked list with the given sum
  findPairsWithGivenSum(head, target) {
    // code here
    const res = [],
      map = {};
    let curr = head;
    while (curr) {
      const diff = target - curr.data;
      if (map[diff]) res.unshift([diff, curr.data]);
      // add to map after checking for diff so don't create pair with itself
      map[curr.data] = 1;
      curr = curr.next;
    }
    return res;
  }
}

// Time: O(n)
// Space: O(1)
