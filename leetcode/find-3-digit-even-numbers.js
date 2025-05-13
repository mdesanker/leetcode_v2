var findEvenNumbers = function (digits) {
  const count = new Array(10).fill(0);
  for (const num of digits) {
    count[num]++;
  }

  const res = [];
  for (let i = 1; i < 10; i++) {
    if (count[i] === 0) continue;
    count[i]--;

    for (let j = 0; j < 10; j++) {
      if (count[j] === 0) continue;
      count[j]--;

      for (let k = 0; k < 10; k += 2) {
        if (count[k] === 0) continue;
        res.push(i * 100 + j * 10 + k);
      }
      count[j]++;
    }
    count[i]++;
  }
  return res;
};

// TC: O(n)
// SC: O(1)
