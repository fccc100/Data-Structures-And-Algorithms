// 1751. 最多可以参加的会议数目 II
var maxValue = function(events, k) {

}

/**
 * 0601
 */

// 10. 正则表达式匹配
var isMatch = function(s, p) {
  let m = s.length;
  let n = p.length;

  // dp[i][j]表示 s 前 i 个字符和 p 前j 个字符是否匹配
  let dp = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(false);
  }
  dp[0][0] = true;

  // 模式串匹配空串， 为*时，可以让前面一个字符匹配0次，dp[0][i] = dp[0][i - 2]
  for (let i = 1; i <= n; i++) {
    if (p[i - 1] == '*') {
      dp[0][i] = dp[0][i - 2];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 当前字符相等或者 p 是 . ,当前匹配上，只需要看i - 1, j - 1位置是否匹配上
      if (p[j - 1] == '.' || s[i - 1] == p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == '*') {
        // p的当前字符是*，可以让前一个字符匹配0次：dp[i][j] = dp[i][j - 2]
        // 如果s当前位置和p的前一个位置字符相等，或者p的前一个位置字符是. 
        // 1).dp[i][j] = dp[i - 1][j] 让*号多匹配一个就可以
        dp[i][j] = dp[i][j - 2];
        if ((s[i - 1] == p[j - 2]) || p[j - 2] == '.') {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      }
    }
  }
  return dp[m][n];
}