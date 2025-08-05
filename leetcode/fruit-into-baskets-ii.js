var numOfUnplacedFruits = function (fruits, baskets) {
  const n = fruits.length;
  let count = n;
  const used = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (baskets[j] >= fruits[i] && !used[j]) {
        used[j] = true;
        count--;
        break;
      }
    }
  }
  return count;
};
// TC: O(n ^ 2)
// SC: O(n)

// Modify baskets instead of using used array
var numOfUnplacedFruits = function (fruits, baskets) {
  const n = fruits.length;
  let count = n;
  for (let i = 0; i < n; i++) {
    let isPlaced = false;
    for (let j = 0; j < n; j++) {
      if (baskets[j] >= fruits[i]) {
        baskets[j] = -1;
        isPlaced = true;
        break;
      }
    }
    if (isPlaced) count--;
  }
  return count;
};
// TC: O(n ^ 2)
// SC: O(1)
