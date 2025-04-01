var findAnagrams = function (s, p) {
  const neededChars = {};
  for (const char of p) neededChars[char] = (neededChars[char] || 0) + 1;

  let l = 0,
    r = 0,
    neededLength = p.length,
    res = [];
  while (r < s.length) {
    const rChar = s[r];
    if (neededChars[rChar] > 0) neededLength--;
    neededChars[rChar]--;
    r++;

    if (neededLength === 0) res.push(l);

    if (r - l + 1 > p.length) {
      const lChar = s[l];
      if (neededChars[lChar] >= 0) neededLength++;
      neededChars[lChar]++;
      l++;
    }
  }
  return res;
};

// Time: O(n)
// Space: O(n)
