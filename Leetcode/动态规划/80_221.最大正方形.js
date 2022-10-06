// 221. 最大正方形
// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

// 示例 1：
// 输入：matrix = [
//  ["1","0","1","0","0"],
//  ["1","0","1","1","1"],
//  ["1","1","1","1","1"],
//  ["1","0","0","1","0"]
// ]

// [
//  ["1","0","1","0","0"],
//  ["1","0","1","1","1"],
//  ["1","1","1","2","2"],
//  ["1","0","0","1","0"]
// ]
// 输出：4

// 递归
function maximalSquare(matrix) {
  function _maximalSquare(matrix, i, j) {
    if (i == 0 || j == 0) {
      return matrix[i][j] == '0' ? 0 : 1;
    }
    if (matrix[i][j] == '0') {
      return 0; 
    }

    return Math.min(_maximalSquare(matrix, i - 1, j), Math.min(_maximalSquare(matrix, i, j - 1), _maximalSquare(matrix, i - 1, j - 1))) + 1;
  }

  let m = matrix.length;
  let n = matrix[0].length;
  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, _maximalSquare(matrix, i, j))
    }
  }
  return max * max;
}

// 记忆化搜索
function maximalSquare(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let memo = Array(m);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = Array(n);
  }

  function _maximalSquare(matrix, i, j) {
    if (i == 0 || j == 0) {
      return matrix[i][j] == '0' ? 0 : 1;
    }
    if (matrix[i][j] == '0') {
      return 0; 
    }
    if (memo[i][j] !== undefined) {
      return memo[i][j];
    }

    return memo[i][j] = Math.min(_maximalSquare(matrix, i - 1, j), Math.min(_maximalSquare(matrix, i, j - 1), _maximalSquare(matrix, i - 1, j - 1))) + 1;
  }

  let max = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, _maximalSquare(matrix, i, j));
    }
  }
  return max * max;
}

// 动态规划
function maximalSquare(matrix) {

  // 状态定义:dp[i][j]表示以i,j结尾能组成最大正方形的面积
  let m = matrix.length;
  let n = matrix[0].length;
  let dp = Array(m);
  let max = 0;
  for (let i = 0; i < m; i++) {
    dp[i] = Array(n);
    dp[i][0] = matrix[i][0] == '0' ? 0 : 1;
    max = Math.max(max, dp[i][0]);
  }

  for (let i = 1; i < n; i++) {
    dp[0][i] = matrix[0][i] == '0' ? 0 : 1;
    max = Math.max(max, dp[0][i]);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] == '0') {
        dp[i][j] = 0;
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;
      }
      max = Math.max(max, dp[i][j]);
    }
  }
  return max * max;
}
