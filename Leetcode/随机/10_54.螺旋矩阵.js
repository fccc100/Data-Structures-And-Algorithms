// 54. 螺旋矩阵
// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

// 示例 1：
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let res = [];

  // 每次取矩阵的第一行拼在结果集中，取完一行后去掉当前行再将矩阵逆时针旋转90度，继续上述操作，直到矩阵长度为0
  while(matrix.length) {
    res = res.concat(matrix[0]);
    matrix.shift();
    matrix = rotate(matrix);
  }
  return res;
};

// 将矩阵逆时针旋转90度
function rotate(matrix) {
  if (!matrix.length) return [];
  let m = matrix.length;
  let n = matrix[0].length;
  let res = Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = Array(m);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[n - j - 1][i] = matrix[i][j];
    }
  }

  return res;
}