// 542. 01 矩阵
// 给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。

// 两个相邻元素间的距离为 1 。

// 示例 1：

// 输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
// 输出：[[0,0,0],[0,1,0],[0,0,0]]
// 示例 2：

// 输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
// 输出：[[0,0,0],[0,1,0],[1,2,1]]

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// 动态规划
var updateMatrix = function(mat) {
  let m = mat.length;
  if (m == 0) return [];
  let n = mat[0].length;

  let dp = Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = Array(n).fill(Infinity);
  }

  // 矩阵中值为0的位置结果矩阵中也是0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 0) {
        dp[i][j] = 0;
      }
    }
  }

  // 从四个方向依次求当前位置的最小距离
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i - 1 >= 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
      }
      if (j - 1 >= 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = n - 1; j >= 0; j--) {
      if (i - 1 >= 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
      }
      if (j + 1 <= n - 1) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
      }
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (i + 1 <= m - 1) {
        dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
      }
      if (j - 1 >= 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
      }
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i + 1 <= m - 1) {
        dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
      }
      if (j + 1 <= n - 1) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
      }
    }
  }
  return dp;
};