// 498. 对角线遍历
// 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

// 示例 1：

// 输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,4,7,5,3,6,8,9]
// 示例 2：

// 输入：mat = [[1,2],[3,4]]
// 输出：[1,2,3,4]

// [
//   1, 2, 3
//   4, 5, 6
//   7, 8, 9
// ]

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let m = mat.length;
  if (m == 0) return [];
  let n = mat[0].length;

  // [[1], [2, 4], [3, 5, 7], [6, 8], [9]]
  let temp = Array((m - 1) + (n - 1) + 1);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!temp[i + j]) {
        temp[i + j] = [];
      }
      temp[i + j].push(mat[i][j]);
    }
  }

  let res = [];
  // 反向0，正向1
  let dir = 0;
  for (let i = 0; i < temp.length; i++) {
    if (dir == 0) {
      res = res.concat(temp[i].reverse())
      dir = 1;
    } else {
      res = res.concat(temp[i]);
      dir = 0;
    }
  }
  return res;
};