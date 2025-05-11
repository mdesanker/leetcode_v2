var threeConsecutiveOdds = function (arr) {
  let count = 0;
  for (const num of arr) {
    if (num % 2 === 1) count++;
    else count = 0;

    if (count === 3) return true;
  }
  return false;
};

// TC: O(n)
// SC: O(1)
