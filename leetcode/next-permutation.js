// Brute - Memory Allocation Error
var nextPermutation = function (nums) {
  const n = nums.length;
  const permutations = [];

  // sort array so we can skip duplicate permutations and permutations will be in lexicographical order
  const arr = nums.slice();
  arr.sort((a, b) => a - b);

  function backtrack(curr, used) {
    if (curr.length === n) {
      permutations.push(curr.slice());
      return;
    }

    for (let i = 0; i < n; i++) {
      if (used[i]) continue;
      // skip duplicate permutations
      if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) continue;
      curr.push(arr[i]);
      used[i] = true;
      backtrack(curr, used);
      curr.pop();
      used[i] = false;
    }
  }
  backtrack([], new Array(n).fill(false));

  for (let i = 0; i < permutations.length; i++) {
    const curr = permutations[i];
    // find index of current permutation
    if (curr.every((el, ind) => el === nums[ind])) {
      const next = permutations[(i + 1) % permutations.length];
      // replace each element in nums array with the next permutation
      for (let j = 0; j < nums.length; j++) {
        nums[j] = next[j];
      }
      break;
    }
  }
};
// TC: O(n!)
// SC: O(n!)

// Optimal
var nextPermutation = function (nums) {
  const n = nums.length;

  // find pivot - first decreasing element
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;

  // find smallest number greater than nums[i] to its right
  if (i >= 0) {
    let j = n - 1;
    while (nums[j] <= nums[i]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // reverse the suffix (right side of pivot)
  let l = i + 1,
    r = n - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
};
// TC: O(n)
// SC: O(1)
