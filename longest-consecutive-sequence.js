// Brute force (TLE)
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;

  for (const num of set) {
    let len = 0,
      curr = num;
    while (set.has(curr)) {
      len++;
      curr++;
    }
    max = Math.max(max, len);
  }
  return max;
};

// Time: O(n^2)
// Space: O(n)

// Hash set
// Optimizes over the brute force method by only trying to build a longest sequence if the starting point has no numbers directly lower than it
// This means we will only start at the beginning of sequences
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let len = 0;
      while (set.has(num + len)) {
        len++;
      }
      max = Math.max(max, len);
    }
  }
  return max;
};

// Time: O(n)
// Space: O(n)
