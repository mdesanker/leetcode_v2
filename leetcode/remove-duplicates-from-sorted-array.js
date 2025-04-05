// Brute force
var removeDuplicates = function (nums) {
  const n = nums.length;
  const set = new Set();
  for (const num of nums) set.add(num);

  let i = 0;
  for (const val of set) {
    nums[i] = val;
    i++;
  }
  return i;
};

// Time: O(nlogn + n) nlogn set.add, n to iterate through set
// Space: O(n)

// Two pointer
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }
  return i + 1;
};

// Time: O(n)
// Space: O(1)
