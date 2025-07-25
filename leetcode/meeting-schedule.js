/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {boolean}
   */
  canAttendMeetings(intervals) {
    // sort intervals so only need to check against previous meeting
    intervals.sort((a, b) => a.start - b.start);
    for (let i = 1; i < intervals.length; i++) {
      // check if current meeting starts before the previous one ends
      if (intervals[i].start < intervals[i - 1].end) return false;
    }
    return true;
  }
}

// TC: O(nlogn)
// SC: O(n)
