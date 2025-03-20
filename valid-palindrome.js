// Two pointer
var isPalindrome = function (s) {
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    while (l < r && !s[l].match(/[a-z0-9]/i)) l++;
    while (l < r && !s[r].match(/[a-z0-9]/i)) r--;
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
    l++;
    r--;
  }
  return true;
};

// Time: O(n)
// Space: O(1)
