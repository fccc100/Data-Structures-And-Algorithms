/*
 * @lc app=leetcode.cn id=397 lang=java
 *
 * [397] 整数替换
 */

// @lc code=start
function integerReplacement(n) {
  let dp = Array(n + 2);
  dp[0] = 0;
  dp[1] = 0;
  if (n == 1) return dp[1];
  dp[2] = 1;
  for (let i = 3; i <= n + 1; i++) {
    if ((i % 2) != 0) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = dp[i / 2] + 1;
      dp[i - 1] = Math.min(dp[i - 1], dp[i] + 1);
    }
  }
  return dp[n - 1];
}
/**
  1 2 3 4 5 6 7 8
  0 1 2 2 3 3 4 3
*/
// @lc code=end

