var partition = function (s) {
  const n = s.length;
  const res = [];

  function isPalindrome(l, r) {
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  }

  function backtrack(i, curr) {
    if (i >= n) {
      res.push(curr.slice());
      return;
    }

    for (let j = i; j < n; j++) {
      if (isPalindrome(i, j)) {
        curr.push(s.slice(i, j + 1));
        backtrack(j + 1, curr);
        curr.pop();
      }
    }
  }

  backtrack(0, []);
  return res;
};

// Time: O(n * 2^n) 2^n to pick/not pick each element, n to check isPalindrome
// Space: O(n * 2^n)
