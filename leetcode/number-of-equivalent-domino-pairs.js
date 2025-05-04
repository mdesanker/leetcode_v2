var numEquivDominoPairs = function (dominoes) {
  const map = new Map();
  let count = 0;
  for (const dom of dominoes) {
    const arr = new Array(10).fill(0);
    for (const val of dom) {
      arr[val]++;
    }
    const key = arr.join("#");
    if (map.get(key)) count += map.get(key);
    map.set(key, map.get(key) + 1 || 1);
  }
  return count;
};

// TC: O(n)
// SC: O(n)
