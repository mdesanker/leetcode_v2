var combinationSum2 = function (candidates, target) {
  const res = [];

  // sort in increasing order
  candidates.sort((a, b) => a - b);

  function backtrack(ind, curr, total) {
    // valid base case
    if (total === target) {
      res.push(curr.slice());
      return;
    }

    // invalid base case
    if (ind >= candidates.length || total > target) return;

    // can choose to add any of the nums between ind and end of nums
    for (let i = ind; i < candidates.length; i++) {
      // if current number is a duplicate, skip
      if (i > ind && candidates[i] === candidates[i - 1]) continue;

      // push nums[i] onto curr and backtrack
      curr.push(candidates[i]);
      backtrack(i + 1, curr, total + candidates[i]);
      // remove nums[i] so can try adding the next num in nums array
      curr.pop();
    }
  }

  backtrack(0, [], 0);
  return res;
};

// Time: O(n * 2^n)
// Space: O(n * 2^n)
