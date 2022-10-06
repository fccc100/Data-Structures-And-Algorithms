// 2133. 检查是否每一行每一列都包含全部整数
// 对一个大小为 n x n 的矩阵而言，如果其每一行和每一列都包含从 1 到 n 的 全部 整数（含 1 和 n），则认为该矩阵是一个 有效 矩阵。

// 给你一个大小为 n x n 的整数矩阵 matrix ，请你判断矩阵是否为一个有效矩阵：如果是，返回 true ；否则，返回 false 。

// 示例 1：

// 输入：matrix = [[1,2,3],[3,1,2],[2,3,1]]
// 输出：true
// 解释：在此例中，n = 3 ，每一行和每一列都包含数字 1、2、3 。
// 因此，返回 true 。
// 示例 2：

// 输入：matrix = [[1,1,1],[1,2,3],[1,2,3]]
// 输出：false
// 解释：在此例中，n = 3 ，但第一行和第一列不包含数字 2 和 3 。
// 因此，返回 false 。

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
  let m = matrix.length;
  if (m == 0) {
    return false;
  }
  let n = matrix[0].length;

  // row[i]：第i行的所有数字
  let row = Array(m);

  // col[i]: 第i列的所有数字
  let col = Array(n);

  for (let i = 0; i < m; i++) {
    if (!row[i]) {
      row[i] = new Set();
    }
    for (let j = 0; j < n; j++) {
      if (!col[j]) {
        col[j] = new Set();
      }

      row[i].add(matrix[i][j]);
      col[j].add(matrix[i][j]);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j ++) {
      if (!row[i].has(j + 1) || !col[i].has(j + 1)) {
        return false;
      }
    }
  }
  return true;
};