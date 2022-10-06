// 1137. 第 N 个泰波那契数
// 泰波那契序列 Tn 定义如下： 

// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

// 递归
function tribonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

// 记忆化搜索
function tribonacci(n) {
  let memo = Array(n + 1);
  function _tribonacci(n) {
    if (n == 0) {
      return 0;
    }
    if (n == 1 || n == 2) {
      return 1;
    }

    if (memo[n] !== undefined) {
      return memo[n];
    }
    
    return memo[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  }

  return _tribonacci(n);
}

// 动态规划
function tribonacci(n) {
  let dp = Array(n + 1);
  dp[0] = 0;
  dp[1] = dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[n];
}