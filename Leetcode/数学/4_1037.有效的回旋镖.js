// 1037. 有效的回旋镖
// 给定一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点，
// 如果这些点构成一个 回旋镖 则返回 true 。

// 回旋镖 定义为一组三个点，这些点 各不相同 且 不在一条直线上 。

// 示例 1：

// 输入：points = [[1,1],[2,3],[3,2]]
// 输出：true
// 示例 2：

// 输入：points = [[1,1],[2,2],[3,3]]
// 输出：false

/**
 * @param {number[][]} points
 * @return {boolean}
 */
// 用v1 v2分别表示points[0] 到 points[1] 和 points[0] 到 points[2]两个向量
// 三个点各不相同且不在一条直线的 就是 两个向量相乘不等于0
// 向量相乘：矩阵相乘 v1[0] * v2[1] - v2[0] * v1[1]
var isBoomerang = function(points) {
  let v1 = [points[1][0] - points[0][0], points[2][0] - points[0][0]];
  let v2 = [points[1][1] - points[0][1], points[2][1] - points[0][1]];

  return v1[0] * v2[1] - v2[0] * v1[1] != 0;
};