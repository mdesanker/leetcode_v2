var countCompleteSubarrays = function (nums) {
  const n = nums.length;
  let count = 0,
    l = 0,
    r = 0;

  const distinct = new Set(nums).size;

  const hash = {};
  let curr = 0;

  while (r < n) {
    const rNum = nums[r];
    if (!hash[rNum] || hash[rNum] === 0) curr++;
    hash[rNum] = (hash[rNum] || 0) + 1;

    while (curr === distinct) {
      // n - r = total number of subarrays starting at l and ending from r to n - 1
      // can do because the number of distinct in subarray is equal to number distinct in entire nums array
      count += n - r;
      const lNum = nums[l];
      hash[lNum]--;
      if (hash[lNum] === 0) curr--;
      l++;
    }
    r++;
  }
  return count;
};

// Time: O(n)
// Space: O(n)
