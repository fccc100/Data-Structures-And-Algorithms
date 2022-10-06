// 1062. 最长重复子串
// 给定字符串 S，找出最长重复子串的长度。如果不存在重复子串就返回 0。

// 示例 1：

// 输入："abcd"
// 输出：0
// 解释：没有重复子串。
// 示例 2：

// 输入："abbaba"
// 输出：2
// 解释：最长的重复子串为 "ab" 和 "ba"，每个出现 2 次。
// 示例 3：

// 输入："aabcaabdaab"
// 输出：3
// 解释：最长的重复子串为 "aab"，出现 3 次。
// 示例 4：

// 输入："aaaaa"
// 输出：4
// 解释：最长的重复子串为 "aaaa"，出现 2 次。

/**
 * @param {string} s
 * @return {number}
 */
var longestRepeatingSubstring = function (s) {
  let n = s.length;
  if (n == 0) return 0;

  // dp[i][j]表示s以i结尾和j结尾的最长重复子串长度
  let dp = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = Array(n + 1).fill(0);
  }

  let res = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (s[i - 1] == s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        res = Math.max(res, dp[i][j]);
      }
    }
  }
  return res;
};