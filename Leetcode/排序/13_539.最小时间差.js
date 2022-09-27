// 539. 最小时间差
// 给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

// 示例 1：

// 输入：timePoints = ["23:59","00:00"]
// 输出：1
// 示例 2：

// 输入：timePoints = ["00:00","23:59","00:00"]
// 输出：0

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  for (let i = 0; i < timePoints.length; i++) {
    let cur = timePoints[i].split(':');

    let curMinutes = Number(cur[0]) * 60 + Number(cur[1]);
    timePoints[i] = curMinutes;

  }

  timePoints.sort((a, b) => a - b);
  let preTime = timePoints[0];
  let res = Infinity;
  for (let i = 1; i < timePoints.length; i++) {
    res = Math.min(res, timePoints[i] - preTime);
    preTime = timePoints[i];
  }

  res = Math.min(res, 1440 - timePoints[timePoints.length - 1] + timePoints[0]);
  return res;
};