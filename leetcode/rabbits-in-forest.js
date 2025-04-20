var numRabbits = function (answers) {
  const map = {};
  for (const ans of answers) map[ans] = (map[ans] || 0) + 1;
  let res = 0;
  for (const key of Object.keys(map)) {
    // group of rabbits = key + 1 (rabbit sees key number of rabbits + 1 including themself)
    // ceiling division for group overflow
    res += (Number(key) + 1) * Math.ceil(map[key] / (Number(key) + 1));
  }
  return res;
};
// TC: O(n)
// SC: O(n)
