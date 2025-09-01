var intersection = function (nums1, nums2) {
  const map = {};
  for (const num of nums1) map[num] = 1;

  const res = new Set();
  for (const num of nums2) {
    if (num in map) res.add(num);
  }

  return Array.from(res);
};
// TC: O(n)
// SC: O(n)
