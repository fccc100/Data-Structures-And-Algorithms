// 329. 矩阵中的最长递增路径
// 给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。

// 对于每个单元格，你可以往上，下，左，右四个方向移动。 你 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）。

// 示例 1：

// 输入：matrix = [[9,9,4],[6,6,8],[2,1,1]]
// 输出：4 
// 解释：最长递增路径为 [1, 2, 6, 9]。
// 示例 2：

// 输入：matrix = [[3,4,5],[3,2,6],[2,2,1]]
// 输出：4 
// 解释：最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
// 示例 3：

// 输入：matrix = [[1]]
// 输出：1

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let m = matrix.length;
  if (!m) return 0;
  let n = matrix[0].length;

  let dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];

  let memo = Array(m);
  for (let i = 0; i < m; i++) {
    memo[i] = Array(n);
  }

  function dfs(matrix, i, j) {
    if (memo[i][j] !== undefined) {
      return memo[i][j];
    }

    let max = 1;
    for (let k = 0; k < dir.length; k++) {
      let newI = i + dir[k][0];
      let newJ = j + dir[k][1];
      if (newI >= 0 && newI < m && newJ >= 0 && newJ < n && matrix[newI][newJ] > matrix[i][j]) {
        max = Math.max(max, dfs(matrix, newI, newJ) + 1);
      }
    }
    return memo[i][j] = max;
  }

  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, dfs(matrix, i, j));
    }
  }
  return max;
};