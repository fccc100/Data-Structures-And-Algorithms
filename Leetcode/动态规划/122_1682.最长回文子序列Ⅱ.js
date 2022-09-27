// 1682. 最长回文子序列 II
// 字符串 s 的某个子序列符合下列条件时，称为“好的回文子序列”：

// 它是 s 的子序列。
// 它是回文序列（反转后与原序列相等）。
// 长度为偶数。
// 除中间的两个字符外，其余任意两个连续字符不相等。
// 例如，若 s = "abcabcabb"，则 "abba" 可称为“好的回文子序列”，而 "bcb" （长度不是偶数）和 "bbbb" （含有相等的连续字符）不能称为“好的回文子序列”。

// 给定一个字符串 s， 返回 s 的最长“好的回文子序列”的长度。

// 示例 1:

// 输入: s = "bbabab"
// 输出: 4
// 解释: s 的最长“好的回文子序列”是 "baab"。
// 示例 2:

// 输入: s = "dcbccacdb"
// 输出: 4
// 解释: The longest good palindromic subsequence of s is "dccd".

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  let n = s.length;
  if (n == 0) return 0;

  // 定义dp[i][j][0]表示s在[i, j]范围的最长好的回文子序列的长度
  //     dp[i][j][1]表示s在[i, j]范围的最长好的回文子序列的上一个字符
  let dp = Array(n);

  // 初始化
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n);
    for (let j = 0; j < n; j++) {
      dp[i][j] = Array(2);
      dp[i][j][0] = 0;
      dp[i][j][1] = '*'
    }
  }

  let res = 0;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      // 什么时候可以更新好的回文子序列的长度呢
      // 当i跟j位置字符相同并且当前这个字符跟上一轮回文时候的那个字符不相等的时候可以更新
      if (s[i] == s[j] && s[i] != dp[i + 1][j - 1][1]) {
        // 此时更新好的回文子序列长度
        dp[i][j][0] = dp[i + 1][j - 1][0] + 2;
        res = Math.max(res, dp[i][j][0]);
        dp[i][j][1] = s[i];
      } else {
        // 当前i跟j的字符不相同了，不能构成回文子序列，取[i + 1, j]或[i, j - 1]位置的最大值
        dp[i][j][0] = Math.max(dp[i + 1][j][0], dp[i][j - 1][0]);
        // 当前的dp[i][j][1]需要保存的字符是上一轮较长的回文子序列的那个字符
        dp[i][j][1] = dp[i + 1][j][0] > dp[i][j  - 1][0] ? dp[i + 1][j][1] : dp[i][j - 1][1];
      }
    }
  }
  return res;
}