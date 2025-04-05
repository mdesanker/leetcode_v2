// Hash map
var singleNumber = function (nums) {
  const map = {};
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  for (const key of Object.keys(map)) {
    if (map[key] === 1) return Number(key);
  }
};

// Time: O(n + n)
// Space: O(n)

// Hash map with fewer properties
var singleNumber = function (nums) {
  const map = {};
  for (const num of nums) {
    if (num in map) delete map[num];
    else map[num] = true;
  }
  return Number(Object.keys(map)[0]);
};

// Time: O(n)
// Space: O(n)
