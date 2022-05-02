// 435. 无重叠区间
// 给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。返回 需要移除区间的最小数量，使剩余区间互不重叠 。

// 示例 1:

// 输入: intervals = [[1,2],[2,3],[3,4],[1,3]]
// 输出: 1
// 解释: 移除 [1,3] 后，剩下的区间没有重叠。

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let prev = intervals[0][1];
  let res = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > prev) {
      res++;
    } else {
      prev = intervals[i][1];
    }
  }
  return res;
};