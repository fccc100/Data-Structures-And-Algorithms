// 剑指 Offer II 112. 最长递增路径
// 给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。

// 对于每个单元格，你可以往上，下，左，右四个方向移动。 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）

function longestIncreasingPath(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  // 递归函数定义：以i，j为起点的最长递增路径
  function _longestIncreasingPath(matrix, i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return 0;
    }

    let max = 1;
    for (let k = 0; k < dir.length; k++) {
      let i1 = i + dir[k][0];
      let j1 = j + dir[k][1];
      if (i1 >= 0 && i1 < m && j1 >= 0 && j1 < n && matrix[i1][j1] > matrix[i][j]) {
        max = Math.max(max, 1 + _longestIncreasingPath(matrix, i1, j1));
      }
    }
    
    return max;
  }

  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, _longestIncreasingPath(matrix, i, j));
    }
  }

  return max;
}