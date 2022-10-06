/**
 * 0523
 */
// 62. 不同路径
var uniquePaths = function(m, n) {
  // dp[i][j]表示到达[i, j]位置的不同路径数
  let dp = Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = Array(n);
    dp[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  // dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

// 63. 不同路径 II
var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  if (m == 0) return 0;
  let n = obstacleGrid[0].length;

  let dp = Array(m);
  dp[0] = Array(n);
  dp[0][0] = obstacleGrid[0][0] == 1 ? 0 : 1;
  for (let i = 1; i < m; i++) {
    dp[i] = Array(n);
    dp[i][0] = obstacleGrid[i][0] == 1 ? 0 : dp[i - 1][0];
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = obstacleGrid[0][i] == 1 ? 0 : dp[0][i - 1];
  }

  // 障碍物时dp[i][j] = 0,否则dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] == 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}