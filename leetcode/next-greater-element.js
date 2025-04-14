// Brute force
var nextGreaterElement = function (nums1, nums2) {
  const res = new Array(nums1.length).fill(-1);
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i];
    const index = nums2.indexOf(num);
    if (index === -1) continue;
    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > num) {
        res[i] = nums2[j];
        break;
      }
    }
  }
  return res;
};

// Time: O(n * m)
// Space: O(1)

// Stack + map
var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const map = {};
  for (const num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      map[stack.pop()] = num;
    }
    stack.push(num);
  }
  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = map[nums1[i]] || -1;
  }
  return nums1;
};

// Time: O(n + m)
// Space: O(m)
