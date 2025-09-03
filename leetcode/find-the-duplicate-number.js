var findDuplicate = function (nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return num;
    set.add(num);
  }
};
// TC: O(n)
// SC: O(n)

var findDuplicate = function (nums) {
  let slow = 0,
    fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) break;
  }
  fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[fast];
    if (slow === fast) return slow;
  }
};
// TC: O(n)
// SC: O(1)

/**
 * View the array as a linked list
 *
 * Each index points to another index (because nums[i] gives the next "pointer")
 * Since there is a duplicate number, at least two indices point to the same index -> this creates a cycle in the linked list
 * The problem of finding the duplicate number becomes he same as finding the entry poin of the cycle
 */
