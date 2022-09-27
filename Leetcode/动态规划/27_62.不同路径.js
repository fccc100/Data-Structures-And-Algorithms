// 62. 不同路径
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

// 问总共有多少条不同的路径？

// 递归
function uniquePaths(m, n) {
  // 递归函数定义：机器人移动到m, n处的不同路径
  function _uniquePaths(m, n) {
    if (m == 0 || n == 0) {
      return 1;
    }

    return _uniquePaths(m - 1, n) + _uniquePaths(m, n - 1);
  }

  return _uniquePaths(m - 1, n - 1);
}

// 记忆化搜索
function uniquePaths(m, n) {
  let memo = Array(m);
  for (let i = 0; i < m; i++) {
    memo[i] = Array(n);
  }

  function _uniquePaths(m, n) {
    if (m == 0 || n == 0) {
      return 1;
    }
    if (memo[m][n] !== undefined) {
      return memo[m][n];
    }

    return memo[m][n] = _uniquePaths(m - 1, n) + _uniquePaths(m, n - 1);
  }

  return _uniquePaths(m - 1, n - 1);
}

// 动态规划
function uniquePaths(m, n) {
  // 状态定义：dp[i][j]表示机器人移动到[i, j]位置的不同路径数
  let dp = Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = Array(n);
    dp[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  // 状态转移：dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}