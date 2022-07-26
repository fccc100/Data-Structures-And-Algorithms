// 253. 会议室 II
// 给你一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，返回 所需会议室的最小数量 。

// 示例 1：

// 输入：intervals = [[0,30],[5,10],[15,20]]
// 输出：2
// 示例 2：

// 输入：intervals = [[7,10],[2,4]]
// 输出：1

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  let maxEnd = -1;
  for (let i = 0; i < intervals.length; i++) {
    maxEnd = Math.max(maxEnd, intervals[i][1]);
  }

  let diff = Array(maxEnd).fill(0);
  for (let i = 0; i < intervals.length; i++) {
    diff[intervals[i][0]]++;
    diff[intervals[i][1]]--;
  }

  let max = -1;
  for (let i = 1; i < maxEnd; i++) {
    diff[i] += diff[i - 1];
    max = Math.max(max, diff[i]);
  }
  return max;
};