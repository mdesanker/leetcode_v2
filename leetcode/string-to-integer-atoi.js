var myAtoi = function (s) {
  // remove leading whitespace
  s = s.trim();
  if (s.length === 0) return 0;

  let sign = 1,
    i = 0,
    res = 0;

  // check for sign
  if (s[0] === "-") {
    sign = -1;
    i++;
  } else if (s[i] === "+") {
    sign = 1;
    i++;
  }

  // process numerical char
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    res = res * 10 + Number(s[i]);

    // handle overflow
    if (sign * res > 2 ** 31 - 1) return 2 ** 31 - 1;
    if (sign * res < -(2 ** 31)) return -(2 ** 31);

    i++;
  }
  return sign * res;
};

// Time: O(n)
// Space: O(1)
