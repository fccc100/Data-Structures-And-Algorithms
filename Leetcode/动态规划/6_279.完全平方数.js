// 279. 完全平方数
// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
// 示例 1：
// 输入：n = 12
// 输出：3 
// 解释：12 = 4 + 4 + 4

// 示例 2：
// 输入：n = 13
// 输出：2
// 解释：13 = 4 + 9

// 1.递归
function numSquares(n) {
  function _numSquares(n) {
    if (n == 1) {
      return 1;
    }
    if (n == 0) {
      return 0;
    }

    // 拆分成i^2 + (n - i^2)
    let res = n + 1;
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
      res = Math.min(res, 1 + _numSquares(n - i**2));
    }
    return res;
  }

  return _numSquares(n);
}

// 2.记忆化搜索
function numSquares(n) {
  let memo = [];
  function _numSquares(n) {
    if (n == 1) {
      return 1;
    }
    if (n == 0) {
      return 0;
    }

    if (memo[n] !== undefined) {
      return memo[n];
    }

    // 拆分成i^2 + (n - i^2)
    let res = n + 1;
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
      res = Math.min(res, 1 + _numSquares(n - i**2));
    }

    memo[n] = res;
    return res;
  }

  return _numSquares(n);
}

// 3.动态规划
function numSquares(n) {
  let dp = Array(n + 1);
  dp.fill(n + 1);

  // 定义初始状态
  dp[0] = 0;
  dp[1] = 1;

  // 从n = 2开始状态转移
  for (let i = 2; i <= n; i++) {

    // 将i拆分成j^2 + (i - j^2)
    for (let j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
      dp[i] = Math.min(dp[i], 1 + dp[i - j**2]);
    }
  }
  
  return dp[n];
}