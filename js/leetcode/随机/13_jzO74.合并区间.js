// 剑指 Offer II 074. 合并区间
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

// 示例 1：

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2：

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // 先根据starti排序
  intervals.sort((a, b) => a[0] - b[0]);

  let n = intervals.length;
  let res = [];
  // 初始时i、j在同一位置，逐个去找可以加入当前大区间的小区间，找到之和记录答案并把i、j再跳到同一位置继续找下一个区间
  for (let i = 0, j = 0; i < n; ) {
    let max = intervals[j][1];
    while(j < n - 1 && intervals[j + 1][0] <= max) {
      j++;
      max = Math.max(max, intervals[j][1]);
    }

    res.push([intervals[i][0], max]);
    i = j + 1;
    j++;
  }
  return res;
};