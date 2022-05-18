// 73. 矩阵置零
// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

// 示例 1：

// 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
// 输出：[[1,0,1],[0,0,0],[1,0,1]]
// 示例 2：


// 输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// 输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 额外空间
var setZeroes = function(matrix) {
  let m = matrix.length;
  if (m == 0) return [];
  let n = matrix[0].length;

  let row = new Set();
  let col = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        row.add(i);
        col.add(j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row.has(i) || col.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

// 不使用额外空间
var setZeroes = function(matrix) {
  let m = matrix.length;
  if (m == 0) return [];
  let n = matrix[0].length;

  // let row = new Set();
  // let col = new Set();
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (matrix[i][j] == 0) {
  //       row.add(i);
  //       col.add(j);
  //     }
  //   }
  // }

  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (row.has(i) || col.has(j)) {
  //       matrix[i][j] = 0;
  //     }
  //   }
  // }
  // return matrix;
}