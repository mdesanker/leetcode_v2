var insert = function (intervals, newInterval) {
  const res = [];
  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start > newInterval[1]) {
      res.push(newInterval);
      return res.concat(intervals.slice(i));
    } else if (end < newInterval[0]) {
      res.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(start, newInterval[0]),
        Math.max(end, newInterval[1]),
      ];
    }
  }
  res.push(newInterval);
  return res;
};

// Time: O(n)
// Space: O(n)
