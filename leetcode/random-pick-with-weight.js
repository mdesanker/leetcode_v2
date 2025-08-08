var Solution = function (w) {
  this.prefix = [];
  let total = 0;
  for (const num of w) {
    total += num;
    this.prefix.push(total);
  }
  this.total = total;
};
// TC: O(n)
// SC: O(n)

Solution.prototype.pickIndex = function () {
  const target = Math.floor(Math.random() * this.total);
  let l = 0,
    r = this.prefix.length - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (target >= this.prefix[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
};
// TC: O(logn)
// SC: O(1)
