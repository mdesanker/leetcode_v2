var isPalindrome = function (x) {
  const str = x.toString();
  let l = 0,
    r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
};

// Time: O(n)
// Space: O(n)

// without converting to string
var isPalindrome = function (x) {
  if (x < 0) return false;
  const nums = [];
  while (x > 0) {
    nums.push(x % 10);
    x = Math.floor(x / 10);
  }
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    if (nums[l] !== nums[r]) return false;
    l++;
    r--;
  }
  return true;
};

// Time: O(n)
// Space: O(n)
