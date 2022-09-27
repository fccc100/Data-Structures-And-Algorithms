// 650. 只有两个键的键盘
// 最初记事本上只有一个字符 'A' 。你每次可以对这个记事本进行两种操作：

// Copy All（复制全部）：复制这个记事本中的所有字符（不允许仅复制部分字符）。
// Paste（粘贴）：粘贴 上一次 复制的字符。
// 给你一个数字 n ，你需要使用最少的操作次数，在记事本上输出 恰好 n 个 'A' 。返回能够打印出 n 个 'A' 的最少操作次数。

// 示例 1：

// 输入：3
// 输出：3
// 解释：
// 最初, 只有一个字符 'A'。
// 第 1 步, 使用 Copy All 操作。
// 第 2 步, 使用 Paste 操作来获得 'AA'。
// 第 3 步, 使用 Paste 操作来获得 'AAA'。
// 示例 2：

// 输入：n = 1
// 输出：0

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  // dp[i]表示得到n个A的最少操作次数
  let dp = Array(n + 1).fill(Infinity);
  dp[0] = dp[1] = 0;

  // j从1开始，如果能被i整除，则更新最小值：先获得j个A，再经过1次copy i / j - 1次粘贴得到i - j个A
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        dp[i] = Math.min(dp[i], dp[j] + i / j);
      }
    }
  }
  return dp[n];
};


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
};

