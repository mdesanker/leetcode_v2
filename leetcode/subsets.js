var subsets = function (nums) {
  const res = [];
  const n = nums.length;

  function backtrack(i, curr) {
    if (i === n) {
      res.push(curr.slice());
      return;
    }

    backtrack(i + 1, curr);
    curr.push(nums[i]);
    backtrack(i + 1, curr);
    curr.pop();
  }
  backtrack(0, []);
  return res;
};

// Time: O(n * 2^n)
// Space: O(n * 2^n)
