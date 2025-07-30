//  Greedy
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;

  const costTotal = cost.reduce((a, c) => a + c, 0);
  const gasTotal = gas.reduce((a, c) => a + c, 0);

  if (costTotal > gasTotal) return -1;

  let total = 0,
    start = 0;
  for (let i = 0; i < n; i++) {
    total += gas[i] - cost[i];

    if (total < 0) {
      total = 0;
      start = i + 1;
    }
  }
  return start;
};

// TC: O(n)
// SC: O(1)
