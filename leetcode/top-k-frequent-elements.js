// Bucket sort
var topKFrequent = function (nums, k) {
  const map = new Map(),
    bucket = [];

  // count frequency of every number
  for (const num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }

  // place nums into array where index corresponds to freq
  for (const [val, freq] of map) {
    bucket[freq] = (bucket[freq] || new Set()).add(val);
  }

  // add nums from end of array to get most frequent nums
  const res = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) res.push(...bucket[i]);
    if (res.length === k) return res;
  }
};

// Time: O(n)
// Space: O(n)
