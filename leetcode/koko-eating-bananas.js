// Binary search
var minEatingSpeed = function (piles, h) {
  function isValid(val) {
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / val);
    }
    return hours <= h;
  }

  let l = 0,
    r = Math.max(...piles); // piles.length <= h
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (isValid(mid)) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

// Time: O(logn)
// Space: O(1)
