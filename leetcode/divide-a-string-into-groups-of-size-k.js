var divideString = function (s, k, fill) {
  const res = [];
  for (let i = 0; i < s.length; i += k) {
    let curr = s.slice(i, i + k);
    res.push(curr.padEnd(k, fill));
  }
  return res;
};

// TC: O(n)
// SC: O(1)
