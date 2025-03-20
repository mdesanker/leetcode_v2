// Two pointer
var twoSum = function (numbers, target) {
  let l = 0,
    r = numbers.length - 1;

  while (l < r) {
    if (numbers[l] + numbers[r] === target) return [l + 1, r + 1];
    else if (numbers[l] + numbers[r] > target) r--;
    else l++;
  }
  return [-1, -1];
};

// Time: O(n)
// Space: O(1)
