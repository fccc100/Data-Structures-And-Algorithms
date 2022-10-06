// 56. 合并区间
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

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
  // 先以start排序
  intervals.sort((a, b) => a[0] - b[0]);

  let res = [];  
  // 双指针遍历，i表示起始位置，用j去寻找当前可以合并的最大位置
  for (let i = 0, j = 0; i < intervals.length; ) {

    // 每遍历一个j，需要记录当前end的最大值，如果每个位置的start小于等于这个最大值，说明当前位置可以合并
    let max = intervals[j][1];
    while(j < intervals.length - 1 && intervals[j + 1][0] <= max) {
      j++;
      max = Math.max(intervals[j][1], max);
    }
    // 往右找不动了，添加一个答案，[[i][0], max]
    res.push([intervals[i][0], max]);

    // 找到一个答案之和，i直接跳到j下一个位置，j++
    i = j + 1;
    j++;
  }
  return res;
};