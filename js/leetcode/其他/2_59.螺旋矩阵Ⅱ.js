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
var generateMatrix = function (n) {
  const maxNum = n * n;
  let curNum = 1;
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(-1));
  let row = 0,
    column = 0;
  // 右下左上
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];
  let directionIndex = 0;
  while (curNum <= maxNum) {
    matrix[row][column] = curNum;
    curNum++;
    const nextRow = row + directions[directionIndex][0],
      nextColumn = column + directions[directionIndex][1];
    if (nextRow < 0 || nextRow >= n || nextColumn < 0 || nextColumn >= n || matrix[nextRow][nextColumn] !== -1) {
      // 顺时针旋转至下一个方向
      directionIndex = (directionIndex + 1) % 4;
    }
    row = row + directions[directionIndex][0];
    column = column + directions[directionIndex][1];
  }
  return matrix;
};