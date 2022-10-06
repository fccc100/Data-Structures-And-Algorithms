// 1682. 最长回文子序列 II
var longestPalindromeSubseq = function(s) {
  let n = s.length;
  if (n == 0) return 0;

  // dp[i][j][0]表示[i, j]的最长好的回文子序列的长度
  // dp[i][j][1]表示[i, j]的最长好的回文子序列的长度的左右两端的字符
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n);
    for (let j = 0; j < n; j++) {
      dp[i][j] = Array(2);
      dp[i][j][0] = 0;
      dp[i][j][1] = '*';
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] == s[j] && s[i] != dp[i + 1][j - 1][1]) {
        dp[i][j][0] = dp[i + 1][j - 1][0] + 2;
        dp[i][j][1] = s[i];
      } else {
        dp[i][j][0] = Math.max(dp[i + 1][j][0], dp[i][j - 1][0]);
        dp[i][j][1] = dp[i + 1][j][0] > dp[i][j - 1][0] ? dp[i + 1][j][1] : dp[i][j - 1][1];
      }
    }
  }
  return dp[0][n - 1][0];
}

// 1092.最短公共超序列
var shortestCommonSupersequence = function (str1, str2) {
  let m = str1.length;
  let n = str2.length;

  // 先求最长公共子序列lcs
  let dp = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill('');
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
      } else {
        dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
      }
    }
  }

  // 求得lcs后，构建最短公共超序列
  let lcs = dp[m][n];
  let res = '';
  let j = 0;
  let k = 0;
  // 是lcs中的字符拼一次，不是lcs中的字符 str1和str2都要拼接
  for (let i = 0; i < lcs.length; i++) {
    while (j < m && str1[j] != lcs[i]) {
      res += str1[j];
      j++;
    }
    while (k < n && str2[k] != lcs[i]) {
      res += str2[k];
      k++;
    }
    res += lcs[i];

    j++;
    k++;
  }
  res += str1.substr(j);
  res += str2.substr(k);
  return res;
}