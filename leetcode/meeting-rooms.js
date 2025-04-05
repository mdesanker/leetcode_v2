var meetingRooms = function (intervals) {
  // sort by start times
  intervals.sort((a, b) => a[0] - b[0]);
  let start = intervals[0][0],
    end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];
    if (currStart < end) return false;
    start = currStart;
    end = currEnd;
  }
  return true;
};

// Time: O(n)
// Space: O(1)

// check current interval against previous
var meetingRooms = function (intervals) {
  // sort by start times
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    // if curr interval starts before previous interval ends
    if (intervals[i][0] < intervals[i - 1][1]) return false;
  }
  return true;
};

// Time: O(n)
// Space: O(1)
