var subsetsWithDup = function (nums) {
  const n = nums.length,
    res = [];
  nums.sort((a, b) => a - b);

  function backtrack(i, curr) {
    res.push(curr.slice());
    for (let j = i; j < n; j++) {
      if (j > i && nums[j] === nums[j - 1]) continue;
      curr.push(nums[j]);
      backtrack(j + 1, curr);
      curr.pop();
    }
  }

  backtrack(0, []);
  return res;
};

// Time: O(n * 2^n)
// Space: O(n * 2^n)
