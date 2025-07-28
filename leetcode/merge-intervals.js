var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const [_, prevEnd] = res[res.length - 1];

    if (prevEnd < start) res.push(intervals[i]);
    else res[res.length - 1][1] = Math.max(prevEnd, end);
  }
  return res;
};

// Time: O(nlogn) for sort
// Space: O(n) for sort
