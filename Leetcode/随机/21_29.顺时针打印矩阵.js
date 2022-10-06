// 剑指 Offer 29. 顺时针打印矩阵
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

// 示例 1：

// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
// 示例 2：

// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let ans = [];
  while(matrix.length) {
    for (let i = 0; i < matrix[0].length; i++) {
      ans.push(matrix[0][i]);
    }
    matrix.shift();
    matrix = rotate(matrix);
  }
  return ans;
};

function rotate(matrix) {
  if (!matrix.length) return [];
  let m = matrix.length;
  let n = matrix[0].length;

  let temp = Array(n);
  for (let i = 0; i < n; i++) {
    temp[i] = Array(m);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      temp[n - j - 1][i] = matrix[i][j];
    }
  }
  return temp;
}