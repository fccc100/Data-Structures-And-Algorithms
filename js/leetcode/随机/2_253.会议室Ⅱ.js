// 253. 会议室 II
// 给你一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，返回 所需会议室的最小数量 。

// 示例 1：

// 输入：intervals = [[0,30],[5,10],[15,20]]
// 输出：2

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  // if (intervals.length == 1) return 1;
  // intervals.sort((a, b) => a[0] - b[0]);

  // let res = 1;
  // for (let i = 0; i < intervals.length - 2; i++) {
  //   if (intervals[i][1] > intervals[i + 1][0]) {
  //     res++;
  //   }
  // }
  // return res;
};