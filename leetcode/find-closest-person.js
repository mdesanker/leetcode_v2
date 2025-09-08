var findClosest = function (x, y, z) {
  if (Math.abs(x - z) < Math.abs(y - z)) return 1;
  else if (Math.abs(y - z) < Math.abs(x - z)) return 2;
  else return 0;
};
// TC: O(1)
// SC: O(1)

var findClosest = function (x, y, z) {
  const first = Math.abs(x - z),
    second = Math.abs(y - z);
  return first === second ? 0 : first < second ? 1 : 2;
};
// TC: O(1)
// SC: O(1)
