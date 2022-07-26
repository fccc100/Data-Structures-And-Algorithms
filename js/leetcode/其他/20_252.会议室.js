// 252. 会议室
// 给定一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，请你判断一个人是否能够参加这里面的全部会议。

// 示例 1：

// 输入：intervals = [[0,30],[5,10],[15,20]]
// 输出：false
// 示例 2：

// 输入：intervals = [[7,10],[2,4]]
// 输出：true

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  if (!intervals.length) return true;
  // 按结束时间排序
  intervals.sort((a, b) => a[1] - b[1]);

  let curEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < curEnd) {
      return false;
    }
    curEnd = intervals[i][1];
  }
  return true;
};