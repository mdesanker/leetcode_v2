// Recursive (exceeds max call stack)
var myPow = function (x, n) {
  function calc(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n < 0) return calc(1 / x, -n);

    return x * calc(x, n - 1);
  }
  return calc(x, n);
};

// Time: O(n)
// Space: O(n)

// Optimized recursive
var myPow = function (x, n) {
  function calc(x, n) {
    if (n === 1) return x;
    if (n === 0) return 1;
    if (n < 0) return calc(1 / x, -n);

    const half = calc(x, Math.floor(n / 2));
    if (n % 2 === 0) {
      return half * half;
    } else {
      return half * half * x;
    }
  }
  return calc(x, n);
};

// Time: O(logn)
// Space: O(logn)

// Iteratively (TLE)
var myPow = function (x, n) {
  let res = 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  while (n > 0) {
    res *= x;
    n--;
  }
  return res;
};

// Time: O(n)
// Space: O(n)

// Iterative optimized
var myPow = function (x, n) {
  let res = 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  while (n > 0) {
    if (n % 2 === 1) {
      res *= x;
      console.log(res);
    }
    x *= x;
    n = Math.floor(n / 2);
    console.log(x, n);
  }
  return res;
};

// Time: O(logn)
// Space: O(1)
