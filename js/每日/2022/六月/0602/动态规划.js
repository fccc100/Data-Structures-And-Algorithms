// 10. 正则表达式匹配
var isMatch = function(s, p) {
  let m = s.length;
  let n = p.length;

  // dp[i][j]表示s前i个字符和p前j个字符是否能匹配
  let dp = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(false);
  }
  
  dp[0][0] = true;
  for (let i = 1; i <= n; i++) {
    // 如果p是*，可以将前面的字符干掉，所以取dp[0][i - 2]
    if (p[i - 1] == '*') {
      dp[0][i] = dp[0][i - 2];
    }
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s[i - 1] == p[j - 1] || p[j - 1] == '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == '*') {
        dp[i][j] = dp[i][j - 2];
        if (s[i - 1] == p[j - 2] || p[j - 2] == '.') {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      }
    }
  }
  return dp[m][n];
}

/**
 * 0602
 */

// 44.通配符匹配
var isMatch = function(s, p) {
  let m = s.length;
  let n = p.length;

  // 定义dp[i][j]表示s前i个字符和p前j个字符是否能匹配
  let dp = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(false);
  }

  // 初始状态：空匹配空为true，如果p是*，那将*匹配为空，看前一个是否匹配
  dp[0][0] = true;
  for (let i = 1; i <= n; i++) {
    if (p[i - 1] == '*') {
      dp[0][i] = dp[0][i - 1];
    }
  }

  // 状态转移
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 如果s[i]和p[j]相等或者p是?, 直接等于dp[i - 1][j - 1]
      if (s[i - 1] == p[j - 1] || p[j - 1] == '?') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == '*') {
        // p是*，可以考虑使用*或者不使用*
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }
  return dp[m][n];
}

// 115.不同的子序列
function numDistinct(s, t) {
  let m = s.length;
  let n = t.length;

  // dp[i][j] = 
  let dp = Array();
}