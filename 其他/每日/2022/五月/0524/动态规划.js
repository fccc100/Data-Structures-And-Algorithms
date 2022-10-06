/**
 * 前一日
 */
// 62. 不同路径
var uniquePaths = function(m, n) {
  let dp = Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = Array(n);
    dp[i][0] = 1;
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

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

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] == 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

/**
 * 0524
 */
// 576. 出界的路径数
// 记忆化搜索
var findPaths = function(m, n, maxMove, startRow, startColumn) {
  let MOD = 1000000007;
  let memo = Array(m);
  for (let i = 0; i < m; i++) {
    memo[i] = Array(n);
    for (let j = 0; j < n; j++) {
      memo[i][j] = Array(maxMove + 1);
    }
  }
  function __findPaths(m, n, maxMove, startRow, startColumn) {
    if (startRow < 0 || startColumn < 0 || startRow >= m || startColumn >= n) {
      return 1;
    }
    if (maxMove == 0) {
      return 0;
    }

    if (memo[startRow][startColumn][maxMove] !== undefined) {
      return memo[startRow][startColumn][maxMove];
    }

    let res = 0;
    let t = __findPaths(m, n, maxMove - 1, startRow - 1, startColumn);
    let r = __findPaths(m, n, maxMove - 1, startRow, startColumn + 1);
    let b = __findPaths(m, n, maxMove - 1, startRow + 1, startColumn);
    let l = __findPaths(m, n, maxMove - 1, startRow, startColumn - 1);
    memo[startRow][startColumn][maxMove] = res = ((t % MOD) + (r % MOD) + (b % MOD) + (l % MOD)) % MOD;
    return memo[startRow][startColumn][maxMove];
  }

  return __findPaths(m, n, maxMove, startRow, startColumn);
};

// 650.只有两个键的键盘
var minSteps = function(n) {
  // dp[i]表示得到n个A的最少操作次数
  let dp = Array(n + 1).fill(Infinity);
  dp[0] = dp[1] = 0;

  // 不需要遍历j到i，j只需要遍历到j * j <= i即可，同时取dp[j] + i / j 和 dp[i / j] + j的较小值
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      if (i % j == 0) {
        dp[i] = Math.min(dp[i], dp[j] + i / j, dp[i / j] + j);
      }
    }
  }
  return dp[n];
}