// 1682.最长回文子串Ⅱ
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

// 1062.最长重复子串
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