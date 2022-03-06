// 剑指 Offer 49. 丑数
// 我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。

// 动态规划
function nthUglyNumber(n) {
  let dp = Array(n + 1);
  dp[1] = 1;
  let p2 = 1;
  let p3 = 1;
  let p5 = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(2 * dp[p2], Math.min(3 * dp[p3], 5 * dp[p5]));
    if (dp[i] == 2 * dp[p2]) {
      p2 ++;
    }
    if (dp[i] == 3 * dp[p3]) {
      p3 ++;
    }
    if (dp[i] == 5 * dp[p5]) {
      p5 ++;
    }
  }

  return dp[n];
};