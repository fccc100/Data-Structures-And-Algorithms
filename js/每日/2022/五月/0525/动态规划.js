/**
 * 前一日
 */
// 650.只有两个键的键盘
var minSteps = function(n) {
  let dp = Array(n + 1).fill(Infinity);
  dp[0] = dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j * j <= n; j++) {
      if (i % j == 0) {
        dp[i] = Math.min(dp[i], dp[j] + i / j, dp[i / j] + j);
      }
    }
  }
  return dp[n];
}