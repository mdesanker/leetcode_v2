var numSubseq = function (nums, target) {
  const MOD = 10 ** 9 + 7;
  const n = nums.length;

  nums.sort((a, b) => a - b);

  const pow2 = new Array(n).fill(1);
  for (let i = 1; i < n; i++) pow2[i] = (2 * pow2[i - 1]) % MOD;

  let count = 0;
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    if (nums[l] + nums[r] <= target) {
      count += pow2[r - l];
      l++;
    } else {
      r--;
    }
  }
  return count % MOD;
};
// TC: O(nlogn)
// SC: O(n)

/**
Sort nums
Using 2 pointers from opposite ends, if
nums[l] + nums[r] <= target
Then any combination of number between l and r is valid because 
they will always be bounded by nums[l] and nums[r]
Add 2 ** (r - l) and increment l - each element between r and l can either be taken or not taken
Otherwise decrement r

Reason for 2 ** (r - l)
There are r - l elements between l and r. Each element can either be included or not included
Therefore 2 ** (r - l) possible combinations

Precompute power of 2s
Can be compute intensive and repetitive
 */
