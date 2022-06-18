// 253. 会议室 II
// 给你一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，返回 所需会议室的最小数量 。

// 示例 1：

// 输入：intervals = [[0,30],[5,10],[15,20]]
// 输出：2

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  let maxEnd = 0;
  for (let i = 0; i < intervals.length; i++) {
    maxEnd = Math.max(maxEnd, intervals[i][1]);
  }

  let diff = Array(maxEnd + 1).fill(0);
  for (let i = 0; i < intervals.length; i++) {
    diff[intervals[i][0]]++;
    diff[intervals[i][1]]--;
  }

  let max = 0;
  for (let i = 1; i < maxEnd; i++) {
    diff[i] += diff[i - 1];
    max = Math.max(max, diff[i]);
  }
  return max;
};


// 2.使用js的对象 代替 map， js的map是基于哈希表无序的
// Object可以代替java的TreeMap
var minMeetingRooms = function (intervals) {
  let map = new Object();

  for (let i = 0; i < intervals.length; i++) {
    if (map[intervals[i][0]] !== undefined) {
      map[intervals[i][0]]++;
    } else {
      map[intervals[i][0]] = 1;
    }

    if (map[intervals[i][1]] !== undefined) {
      map[intervals[i][1]]--;
    } else {
      map[intervals[i][1]] = -1;
    }
  }

  let cur = 0;
  let max = 0;
  for (let key in map) {
    cur += map[key];
    max = Math.max(max, cur);
  }
  return max;
};
