var permute = function (nums) {
  const n = nums.length;
  const res = [];

  function backtrack(curr, used) {
    if (curr.length === n) {
      res.push(curr.slice());
      return;
    }

    for (let i = 0; i < n; i++) {
      if (used[i]) continue;

      used[i] = true;
      curr.push(nums[i]);
      backtrack(curr, used);
      used[i] = false;
      curr.pop();
    }
  }
  backtrack([], Array(n).fill(false));
  return res;
};

// Time:  O(n! * n)
// Space: O(n! * n)
