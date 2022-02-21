// 509. 斐波那契数
// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给定 n ，请计算 F(n) 。

// 1.使用递归自顶向下求解，但是这种实现存在许多重叠子问题，时间复杂度O(2^n)。
function fib(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

// 2. 使用记忆化搜索记录每次计算的问题，遇见重叠子问题时直接取值
function fib(n) {
  let memo = Array(n + 1);
  function _fib(n) {
    if (n == 0) {
      return 0;
    }
    if (n == 1) {
      return 1;
    }

    // 第一次求n的斐波那契数时，缓存至memo中，下次再求解该数时直接从memo中取值。
    if (memo[n] === undefined) {
      memo[n] = _fib(n - 1) + _fib(n - 2);
    }

    return memo[n];
  }

  return _fib(n);
}

// 3. 使用动态规划自底向上求解，时间复杂度O(n)
function fib(n) {
  let dp = [];
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}