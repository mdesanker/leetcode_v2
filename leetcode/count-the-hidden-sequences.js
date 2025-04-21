var numberOfArrays = function (differences, lower, upper) {
  let curr = 0,
    min = 0,
    max = 0;
  for (const diff of differences) {
    curr += diff;
    min = Math.min(min, curr);
    max = Math.max(max, curr);
  }
  const spread = max - min;
  const res = upper - lower - spread + 1;
  return res > 0 ? res : 0;
};

// Time: O(n)
// Space: O(1)
