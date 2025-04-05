var shipWithinDays = function (weights, days) {
  function shippingDays(capacity) {
    let days = 0;
    let load = 0;
    for (const weight of weights) {
      load += weight;
      if (load > capacity) {
        days++;
        load = weight;
      }
    }
    return load > 0 ? days + 1 : days;
  }

  const totalWeight = weights.reduce((acc, curr) => acc + curr);
  const minCap = Math.max(...weights);

  // l is max weight otherwise ship can't carry all packages
  // r is total weight where ship carries all packages in 1 day
  let l = minCap,
    r = totalWeight;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    // if can carry all packages within time limit
    // minimize capacity of ship
    if (shippingDays(mid) <= days) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

// Time: O(logn)
// Space: O(1)
