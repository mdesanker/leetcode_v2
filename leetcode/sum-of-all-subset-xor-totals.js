var subsetXORSum = function (nums) {
  const n = nums.length;
  const subsets = [];

  function backtrack(i, curr) {
    if (i === n) {
      subsets.push(curr.slice());
      return;
    }
    curr.push(nums[i]);
    backtrack(i + 1, curr);
    curr.pop();
    backtrack(i + 1, curr);
  }
  backtrack(0, []);

  function calcXor(arr) {
    let total = 0;
    for (const val of arr) {
      total ^= val;
    }
    return total;
  }

  let res = 0;
  for (const subset of subsets) {
    res += calcXor(subset);
  }
  return res;
};

// Time: O(2^n)
// Space: O()
