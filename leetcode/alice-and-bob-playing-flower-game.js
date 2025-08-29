// Brute force (TLE)
var flowerGame = function (n, m) {
  // total number of flowers must be odd for Alice to win
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if ((i + j) % 2 === 1) count++;
    }
  }
  return count;
};
// TC: O(m * n)
// SC: O(1)

// Math
var flowerGame = function (n, m) {
  // total number of flowers must be odd for Alice to win
  // even + odd = odd -> need to combine even from one row with odd from other row
  // can get number of odd and even digits within a number using floor and ceiling division
  return (
    Math.floor(n / 2) * Math.ceil(m / 2) + Math.ceil(n / 2) * Math.floor(m / 2)
  );
};
// TC: O(1)
// SC: O(1)
