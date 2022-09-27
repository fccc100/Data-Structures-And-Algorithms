// 70. 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 要爬上第n阶台阶，可以从第n - 1阶台阶再爬一阶台阶或者从第n - 2阶台阶再爬两阶台阶，所以f(n) = f(n - 1) + f(n - 2);
// 1.使用递归自顶向下求解
function climbStairs(n) {
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
}

// 2.使用递归的方式存在重叠子问题,可以使用记忆化搜索优化
function climbStairs(n) {
  let memo = Array(n + 1);
  function _climbStairs(n) {
    if (n == 1) {
      return 1;
    }
    if (n == 2) {
      return 2;
    }

    if (memo[n] === undefined) {
      memo[n] = _climbStairs(n - 1) + _climbStairs(n - 2);
    }

    return memo[n];
  }

  return _climbStairs(n);
}

// 3.使用动态规划自底向上求解
function climbStairs(n) {
  let dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}