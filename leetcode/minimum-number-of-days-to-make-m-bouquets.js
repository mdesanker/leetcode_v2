var minDays = function (bloomDay, m, k) {
  if (m * k > bloomDay.length) return -1;

  function countBouquets(days) {
    let bouquets = 0;
    let curr = 0;
    for (let i = 0; i < bloomDay.length; i++) {
      if (bloomDay[i] <= days) curr++;
      else if (bloomDay[i] > days) curr = 0;
      if (curr === k) {
        bouquets++;
        curr = 0;
      }
    }
    return bouquets;
  }

  let l = 0,
    r = Math.max(...bloomDay);
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (countBouquets(mid) >= m) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

// Time: O(logn)
// Space: O(1)
