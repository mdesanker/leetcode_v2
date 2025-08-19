var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });
  let count = 0;
  let prevEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start < prevEnd) {
      count++;
      prevEnd = Math.min(prevEnd, end); // want to remove the interval with the larger end
    } else {
      prevEnd = end;
    }
  }
  return count;
};
// TC: O(n)
// SC: O(1)
