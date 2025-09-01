var numRescueBoats = function (people, limit) {
  people.sort((a, b) => b - a);
  let count = 0;
  let l = 0,
    r = people.length - 1;
  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      r--;
    }
    l++;
    count++;
  }
  return count;
};
// TC: O(nlogn)
// SC: O(n)

/**
 * Group heaviest and lightest people together (sort)
 * Two pointer from left and right
 * If sum of left and right is less than equal to limit, decrement both, increase count
 * Otherwise just increment left since it is the heaviest
 */

// Increasing order sort
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let count = 0;
  let l = 0,
    r = people.length - 1;
  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      l++;
    }
    r--;
    count++;
  }
  return count;
};
// TC: O(nlogn)
// SC: O(n)
