// 剑指 Offer II 107. 矩阵中的距离
// 给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。

// 两个相邻元素间的距离为 1 。

// 示例 1：

// 输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
// 输出：[[0,0,0],[0,1,0],[0,0,0]]

// 示例 2：

// 输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
// 输出：[[0,0,0],[0,1,0],[1,2,1]]

// [
//   0, 0, 0
//   0, 1, 0
//   1, 1, 1
// ]

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  // let m = mat.length;
  // let n = mat[0].length;

  // let dp = Array(m);
  // for (let i = 0; i < m; i++) {
  //   dp[i] = Array(n).fill(Infinity);
  // }

  // dp[0][0] = mat[0][0] == 0 ? 0 : Infinity;

  // for (let i = 1; i < n; i++) {
  //   dp[0][i] = mat[0][i] == 0 ? 0 : dp[0][i - 1] + 1;
  // }
  // for (let i = 1; i < m; i++) {
  //   dp[i][0] = mat[i][0] == 0 ? 0 : dp[i - 1][0] + 1;
  // }

  // for (let i = 1; i < m; i++) {
  //   for (let j = 1; j < n; j++) {
  //     dp[i][j] = mat[i][j] == 0 ? 0 : Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
  //   }
  // }

  // for (let i = m - 1; i >= 0; i--) {

  // }
};