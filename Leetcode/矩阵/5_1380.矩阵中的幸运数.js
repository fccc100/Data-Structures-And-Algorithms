// 1380. 矩阵中的幸运数
// 给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。

// 幸运数 是指矩阵中满足同时下列两个条件的元素：

// 在同一行的所有元素中最小
// 在同一列的所有元素中最大
 
// 示例 1：

// 输入：matrix = [[3,7,8],[9,11,13],[15,16,17]]
// 输出：[15]
// 解释：15 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。
// 示例 2：

// 输入：matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// 输出：[12]
// 解释：12 是唯一的幸运数，因为它是其所在行中的最小值，也是所在列中的最大值。
// 示例 3：

// 输入：matrix = [[7,8],[1,2]]
// 输出：[7]
// 解释：7是唯一的幸运数字，因为它是行中的最小值，列中的最大值。

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  let m = matrix.length;
  if (m == 0) {
    return [];
  }
  let n = matrix[0].length;

  // row[i]: 第i行的最小值
  let row = Array(m).fill(Infinity);

  // col[i]: 第i列的最大值
  let col = Array(n).fill(-Infinity);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      row[i] = Math.min(row[i], matrix[i][j]);
      col[j] = Math.max(col[j], matrix[i][j]);
    }
  }

  let res = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == row[i] && matrix[i][j] == col[j]) {
        res.push(matrix[i][j]);
      }
    }
  }
  return res;
};