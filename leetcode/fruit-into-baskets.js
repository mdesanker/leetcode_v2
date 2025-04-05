// Sliding window
var totalFruit = function (fruits) {
  let l = 0,
    r = 0,
    len = 0,
    map = new Map();
  while (r < fruits.length) {
    const rFruit = fruits[r];
    map.set(rFruit, (map.get(rFruit) || 0) + 1);
    while (map.size > 2) {
      const lFruit = fruits[l];
      map.set(lFruit, map.get(lFruit) - 1);
      if (map.get(lFruit) === 0) map.delete(lFruit);
      l++;
    }
    len = Math.max(len, r - l + 1);
    r++;
  }
  return len;
};

// Time: O(n)
// Space: O(n)
