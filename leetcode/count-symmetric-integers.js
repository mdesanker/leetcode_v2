// String conversion
var countSymmetricIntegers = function (low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    const num = i.toString();
    if (num.length % 2 === 1) continue;
    else {
      const len = num.length;
      const firstHalf = num.slice(0, len / 2);
      const secondHalf = num.slice(len / 2);
      const firstSum = firstHalf
        .split("")
        .reduce((acc, curr) => acc + Number(curr), 0);
      const secondSum = secondHalf
        .split("")
        .reduce((acc, curr) => acc + Number(curr), 0);
      if (firstSum === secondSum) count++;
    }
  }
  return count;
};

// Time: O(n * m)
// Space: O(1)
