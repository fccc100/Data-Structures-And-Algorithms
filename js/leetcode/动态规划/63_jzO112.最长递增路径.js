// 剑指 Offer II 112. 最长递增路径
// 给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。

// 对于每个单元格，你可以往上，下，左，右四个方向移动。 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）

function longestIncreasingPath(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n);
  }
  function _longestIncreasingPath(matrix, i, j, val) {
    if (i >= m || j >= n) {
      return 0;
    }
    if (i < 0 || j < 0) {
      return 0;
    }
    if (visited[i][j]) {
      return 0;
    }
    if (matrix[i][j] < val) {
      return 0;
    }

    visited[i][j] = true;
    return Math.max(
      1 + _longestIncreasingPath(matrix, i - 1, j, matrix[i][j]),
      Math.max(1 + _longestIncreasingPath(matrix, i, j + 1, matrix[i][j]),
      Math.max(1 + _longestIncreasingPath(matrix, i + 1, j, matrix[i][j]),
      1 + _longestIncreasingPath(matrix, i, j - 1, matrix[i][j]))
      )
    )
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      visited.forEach(item => {
        item.fill(false)
      })
      res = Math.max(res, _longestIncreasingPath(matrix, i, j, -Infinity));
    }
  }
  return res;
}