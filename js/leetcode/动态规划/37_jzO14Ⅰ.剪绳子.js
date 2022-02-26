// 剑指 Offer 14- I. 剪绳子
// 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

// 同343.分割等和子集

// 递归
function cuttingRope(n) {
  function _cuttingRope(n) {
    if (n == 1) {
      return 1;
    }

    let res = -1;
    for (let i = 1; i < n; i++) {
      res = Math.max(res, i * (n - i), i * _cuttingRope(n - i));
    }

    return res;
  }

  return _cuttingRope(n);
}

// 记忆化搜索
function cuttingRope(n) {
  let memo = Array(n + 1);
  function _cuttingRope(n) {
    if (n == 1) {
      return 1;
    }
    if (memo[n] !== undefined) {
      return memo[n];
    }

    let res = -1;
    for (let i = 1; i < n; i++) {
      res = Math.max(res, i * (n - i), i * _cuttingRope(n - i));
    }

    return memo[n] = res;
  }

  return _cuttingRope(n);
}

// 动态规划
function cuttingRope(n) {
  let dp = Array(n + 1);
  dp.fill(-1);
  dp[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
    }
  }

  return dp[n];
}