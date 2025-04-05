// Two pointer
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1;
  let max = 0;
  while (l < r) {
    const curr = Math.min(height[l], height[r]) * (r - l);
    max = Math.max(max, curr);
    height[l] < height[r] ? l++ : r--;
  }
  return max;
};

// Time: O(n)
// Space: O(1)
