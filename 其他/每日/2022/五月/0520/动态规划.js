/**
 * 前一日
 */
// 516. 最长回文子序列
var longestPalindromeSubseq = function(s) {
  let n = s.length;
  if (n == 0) return 0;

  // dp[i][j]表示字符串在[i, j]范围的最长回文子序列
  let dp = Array(n);
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = Array(n).fill(0);
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s[i] == s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][n - 1];
}

/**
 * 0520
 */
//  64. 最小路径和
var minPathSum = function(grid) {
  let m = grid.length;
  if (m == 0) return 0;
  let n = grid[0].length;

  let dp = Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = Array(n + 1).fill(Infinity);
  }
  dp[0][1] = 0;
  dp[1][0] = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
    }
  }

  return dp[m][n];
};

// 562. 矩阵中最长的连续1线段
var longestLine = function(mat) {
  let m = mat.length;
  if (m == 0) return 0;
  let n = mat[0].length;

  // 横向线段dp
  let dp1 = Array(m);
  // 纵向线段dp
  let dp2 = Array(m);
  // 左上 - 右下对角线线段dp
  let dp3 = Array(m);
  // 右上 - 左下对角线线段dp
  let dp4 = Array(m);

  let ans = 0;
  for (let i = 0; i < m; i++) {
    dp1[i] = Array(n).fill(0);
    dp2[i] = Array(n).fill(0);
    dp3[i] = Array(n).fill(0);
    dp4[i] = Array(n).fill(0);
    
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 0) {
        dp1[i][j] = 0;
        dp2[i][j] = 0;
        dp3[i][j] = 0;
        dp4[i][j] = 0;
      } else {
        dp1[i][j] = j > 0 ? dp1[i][j - 1] + 1 : 1;
        dp2[i][j] = i > 0 ? dp2[i - 1][j] + 1 : 1;
        dp3[i][j] = i > 0 && j > 0 ? dp3[i - 1][j - 1] + 1 : 1;
        dp4[i][j] = i > 0 && j < n - 1 ? dp4[i - 1][j + 1] + 1 : 1;
      }
      ans = Math.max(ans, dp1[i][j], dp2[i][j], dp3[i][j], dp4[i][j])
    }
  }
  return ans;
}