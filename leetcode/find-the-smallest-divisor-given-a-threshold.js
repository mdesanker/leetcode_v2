var smallestDivisor = function (nums, threshold) {
  function calcDivisor(divisor) {
    let sum = 0;
    for (const num of nums) {
      sum += Math.ceil(num / divisor);
    }
    return sum;
  }
  // smallest divisor is 1
  // largest useful divisor is Math.max(...nums) because any larger number will give same result when doing ceil division
  let l = 1,
    r = Math.max(...nums);
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (calcDivisor(mid) <= threshold) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

// Time: O(logn)
// Space: O(1)
