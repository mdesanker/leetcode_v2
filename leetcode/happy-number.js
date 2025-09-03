var isHappy = function (n) {
  const set = new Set();

  function calc(n) {
    // base cases
    if (n === 1) return true;
    if (set.has(n)) return false; // cycle detected

    set.add(n);

    // add squares of digits
    let res = 0;
    for (const num of n.toString()) {
      res += Number(num) ** 2;
    }
    return calc(res);
  }
  return calc(n);
};
// TC: O(n)
// SC: O(n)

// No string conversion
var isHappy = function (n) {
  const set = new Set();

  function calc(n) {
    // base cases
    if (n === 1) return true;
    if (set.has(n)) return false; // cycle detected

    set.add(n);

    // add squares of digits
    let res = 0;
    while (n) {
      const digit = n % 10;
      res += digit ** 2;
      n = Math.floor(n / 10);
    }
    return calc(res);
  }
  return calc(n);
};
// TC: O(n)
// SC: O(n)

// fast and slow pointer
var isHappy = function (n) {
  function sumSquares(num) {
    let res = 0;
    while (num) {
      const digit = num % 10;
      res += digit ** 2;
      num = Math.floor(num / 10);
    }
    return res;
  }

  let slow = n,
    fast = n;
  while (true) {
    slow = sumSquares(slow);
    fast = sumSquares(sumSquares(fast));
    if (slow === fast) return slow === 1;
  }
};
// TC: O(n)
// SC: O(1)
