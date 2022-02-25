// 63. 不同路径 II
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。

// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

// 网格中的障碍物和空位置分别用 1 和 0 来表示。

// 递归
function uniquePathsWithObstacles(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  // 递归函数定义：obstacleGrid移动到[i, j]位置时的不同路径数
  function _uniquePathsWithObstacles(obstacleGrid, i, j) {
    if (i < 0 || j < 0 || obstacleGrid[i][j] == 1) {
      return 0;
    }
    if (i == 0 && j == 0) {
      return obstacleGrid[i][j] == 1 ? 0 : 1;
    }

    return _uniquePathsWithObstacles(obstacleGrid, i - 1, j) + _uniquePathsWithObstacles(obstacleGrid, i, j - 1);
  }

  return _uniquePathsWithObstacles(obstacleGrid, m - 1, n - 1);
}

// 记忆化搜索
function uniquePathsWithObstacles(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  // 使用memo数组记录移动至[i, j]位置的不同路径数
  let memo = Array(m);
  for (let i = 0; i < m; i++) {
    memo[i] = Array(n);
  }

  function _uniquePathsWithObstacles(obstacleGrid, i, j) {
    if (i < 0 || j < 0 || obstacleGrid[i][j] == 1) {
      return 0;
    }
    if (i == 0 && j == 0) {
      return obstacleGrid[i][j] == 1 ? 0 : 1;
    }
    if (memo[i][j] !== undefined) {
      return memo[i][j];
    }

    return memo[i][j] = _uniquePathsWithObstacles(obstacleGrid, i, j - 1) + _uniquePathsWithObstacles(obstacleGrid, i - 1, j);
  }

  return _uniquePathsWithObstacles(obstacleGrid, m - 1, n - 1);
}

// 3.动态规划
function uniquePathsWithObstacles(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  // 状态定义：dp[i][j] 表示移动到obstacleGrid[i - 1][j - 1]位置的不同路径数
  // 初始状态: i < 0 || j < 0 时都为0
  let dp = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1);
    dp[i][0] = 0;
  }

  for (let i = 0; i <= n; i++) {
    dp[0][i] = 0;
  }

  // i = 1 & j = 1时特殊处理
  // 其他情况：dp[i] 根据 obstacleGrid[i - 1][j - 1]位置的值来确定，为障碍则dp[i][j] = 0,不是障碍则为dp[i - 1][j] + dp[i][j - 1]
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i == 1 && j == 1) {
        dp[i][j] = obstacleGrid[i - 1][j - 1] == 1 ? 0 : 1;
      } else {
        dp[i][j] = obstacleGrid[i - 1][j - 1] == 1 ? 0 : dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m][n];
}