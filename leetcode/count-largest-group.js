var countLargestGroup = function (n) {
  // build hash map grouping numbers by sum of digits
  const map = {};
  for (let i = 1; i <= n; i++) {
    const num = i.toString();
    let sum = 0;
    for (const digit of num) {
      sum += Number(digit);
    }
    map[sum] = (map[sum] || 0) + 1;
  }
  // find max count
  const max = Math.max(...Object.values(map));
  // count number of max groups
  let count = 0;
  for (const val of Object.values(map)) {
    if (val === max) count++;
  }
  return count;
};
// Time: O(n * m) m = avg number of digits in each num
// Space: O(n)

var countLargestGroup = function (n) {
  // build hash map grouping numbers by sum of digits
  const map = {};
  let max = 0; // store max count as we go along
  for (let i = 1; i <= n; i++) {
    const num = i.toString();
    let sum = 0;
    for (const digit of num) {
      sum += Number(digit);
    }
    map[sum] = (map[sum] || 0) + 1;
    max = Math.max(max, map[sum]);
  }
  // count number of max groups
  return Object.values(map).filter((val) => val === max).length;
};
// Time: O(n * m) m = avg number of digits in each num
// Space: O(n)
