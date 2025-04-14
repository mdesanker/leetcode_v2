var combinationSum = function (candidates, target) {
  const n = candidates.length;
  const res = [];

  function backtrack(i, curr, sum) {
    if (sum === target) {
      res.push(curr.slice());
      return;
    }
    if (i === n || sum > target) return;

    backtrack(i + 1, curr, sum);
    curr.push(candidates[i]);
    backtrack(i, curr, sum + candidates[i]);
    curr.pop();
  }
  backtrack(0, [], 0);
  return res;
};

// Time: O(n * 2^n)
// Space: O(n * 2^n)

// with loop
var combinationSum = function (candidates, target) {
  const n = candidates.length;
  const res = [];

  function backtrack(i, curr, total) {
    if (total === target) {
      res.push(curr.slice());
      return;
    }
    if (i >= n || total > target) return;

    for (let j = i; j < n; j++) {
      curr.push(candidates[j]);
      backtrack(j, curr, total + candidates[j]); // reuse allowed
      curr.pop();
    }
  }

  backtrack(0, [], 0);
  return res;
};
