/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let res = null;
  if (intervals.length === 1) return intervals;
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  for (i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[i-1][1]) {
      res = [intervals[i-1][0], Math.max(intervals[i-1][1], intervals[i][1])];
      intervals.splice(i-1, 2, res);
      i = i-1;
    }
  }
  return intervals;
};
