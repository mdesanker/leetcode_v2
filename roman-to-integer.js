var romanToInt = function (s) {
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = dict[s[s.length - 1]];
  for (let i = s.length - 2; i >= 0; i--) {
    if (dict[s[i]] < dict[s[i + 1]]) res -= dict[s[i]];
    else res += dict[s[i]];
  }
  return res;
};

// Time: O(n) simplified to O(1) because upper limit on integer size
// Space: O(1)
