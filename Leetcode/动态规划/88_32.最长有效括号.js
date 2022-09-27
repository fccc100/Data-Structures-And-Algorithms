// 32. 最长有效括号
// 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。

// 示例 1：

// 输入：s = "(()"
// 输出：2
// 解释：最长有效括号子串是 "()"

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let dp = Array(s.length).fill(0);

  let max = 0;

  // dp[i]表示以i位置结尾的字符串能组成最长有效括号的长度
  for (let i = 1; i < s.length; i++) {
    // 如果第i位是"(",那dp[i]一定是0
    if (s[i] == ')' && s[i - dp[i - 1] - 1] == '(') {
      dp[i] = 2 + dp[i - 1] + (i - dp[i - 1] - 2 < 0 ? 0 :dp[i - dp[i - 1] - 2]);
    }
    max = Math.max(max, dp[i]);
  }

  return max;
};