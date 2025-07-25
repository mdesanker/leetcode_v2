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

// without converting to string 2
var isPalindrome = function (x) {
  // numbers less than 0 will never be palindromes because of negative sign
  if (x < 0) return false;
  // save initial number
  const temp = x;
  let rev = 0;
  while (x > 0) {
    // multiply result by 10 and add the ones digit
    rev = rev * 10 + (x % 10);
    // remove ones digit from remaining number
    x = Math.floor(x / 10);
  }
  return rev === temp;
};

// TC: O(n)
// SC: O(n)
