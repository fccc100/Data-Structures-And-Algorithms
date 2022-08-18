// 59. 螺旋矩阵 II
// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

// 示例 1：

// 输入：n = 3
// 输出：[[1,2,3],[8,9,4],[7,6,5]]
// 示例 2：

// 输入：n = 1
// 输出：[[1]]

/**
 * @param {number} n
 * @return {number[][]}
 */
//  [
//   [1,2,3],
//   [8,9,4],
//   [7,6,5]
// ]
var generateMatrix = function (n) {
  let res = Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = Array(n);
  }

  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let dirIndex = 0;
  
  let curX = 0;
  let curY = 0;
  let cur = 1;
  while (cur <= n * n) {
    res[curX][curY] = cur;

    let nextX = curX + dirs[dirIndex][0];
    let nextY = curY + dirs[dirIndex][1];
    if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= n || res[nextX][nextY] !== undefined) {
      dirIndex = (dirIndex + 1) % 4;
    }
    curX = curX + dirs[dirIndex][0];
    curY = curY + dirs[dirIndex][1];

    cur++;
  }
  return res;
};