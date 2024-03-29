// 343. 整数拆分
// 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

// 返回 你可以获得的最大乘积 。

// 1.递归, 存在重叠子问题
function integerBreak(n) {
  function _integerBreak(n) {
    if (n == 1) {
      return 1;
    }

    // 拆分为i * (n - i)
    let res = -1;
    for (let i = 1; i < n; i++) {
      res = Math.max(res, Math.max(i * (n - i), i * _integerBreak(n - i)));
    }

    return res;
  }

  return _integerBreak(n);
}

// 2.使用记忆化搜索
function integerBreak(n) {
  let memo = Array(n + 1);
  function _integerBreak(n) {
    if (n == 1) {
      return 1;
    }

    if (memo[n] !== undefined) {
      return memo[n];
    }

    // 拆分为i * (n - i)
    let res = -1;
    for (let i = 1; i < n; i++) {
      res = Math.max(res, Math.max(i * (n - i), i * _integerBreak(n - i)));
    }

    memo[n] = res;
    return res;
  }

  return _integerBreak(n);
}

// 3.动态规划
function integerBreak(n) {
  let dp = Array(n + 1);
  dp.fill(-1);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (j = 1; j <= i - 1; j++) {
      // 拆分成j * (i - j)， 最大值从dp[i], j * (i - j), j * dp[i - j]三个值中取最大值
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
    }
  }

  return dp[n];
}

function integerBreak(n) {
  // n <= 3 时，应该不拆分才是最大，当题目要求至少拆分一次，所以拆一个1出来
  if (n <= 3) {
    return n - 1;
  }
  // 求出n / 3的整数部分
  let a = Math.floor(n / 3);
  // n / 3 的余数部分
  let b = n % 3;

  // 没有余数，则刚好全部拆成3就是最大值
  if (b == 0) {
    return Math.pow(3, a);
  }
  // 余数是1， 把一个3加上1组成4，此时是最大的
  if (b == 1) {
    return Math.pow(3, a - 1) * 4;
  }

  // 余数是2，直接把2作为单独一份
  return Math.pow(3, a) * 2;
}
