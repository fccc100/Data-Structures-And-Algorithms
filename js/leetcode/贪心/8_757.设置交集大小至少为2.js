// 757. 设置交集大小至少为2
// 一个整数区间 [a, b]  ( a < b ) 代表着从 a 到 b 的所有连续整数，包括 a 和 b。

// 给你一组整数区间intervals，请找到一个最小的集合 S，使得 S 里的元素与区间intervals中的每一个整数区间都至少有2个元素相交。

// 输出这个最小集合S的大小。

// 示例 1:

// 输入: intervals = [[1, 3], [1, 4], [2, 5], [3, 5]]
// 输出: 3
// 解释:
// 考虑集合 S = {2, 3, 4}. S与intervals中的四个区间都有至少2个相交的元素。
// 且这是S最小的情况，故我们输出3。
// 示例 2:

// 输入: intervals = [[1, 2], [2, 3], [2, 4], [4, 5]]
// 输出: 5
// 解释:
// 最小的集合S = {1, 2, 3, 4, 5}.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
  // [[1, 3], [1, 4], [2, 5], [3, 5]]

  // 当前结束：3
  // 1 < 3

  let n = intervals.length;
  let res = 0;
  let m = 2;

  // 按开始位置从大到小排序，开始位置相同的按结束位置从小到大排序
  intervals.sort((a, b) => {
    if (a[0] == b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  })

  let temp = Array(n);

  for (let i = 0; i < n; i++) {
    temp[i] = [];
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = intervals[i][0], k = temp[i].length; k < m; j++, k++) {
      res++;
      help(intervals, temp, i - 1, j);
    }
  }
  return res;
};

function help(intervals, temp, pos, num) {
  for (let i = pos; i >= 0; i--) {
    if (intervals[i][1] < num) {
      break;
    }
    temp[i].push(num);
  }
}
