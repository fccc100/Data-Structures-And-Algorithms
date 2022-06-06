// 1092. 最短公共超序列
// 先求lcs，再拼接，lcs中的字符拼一次，其他字符各拼一次
var shortestCommonSupersequence = function (str1, str2) {
  let m = str1.length;
  let n = str2.length;

  // 求lcs
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

  let lcs = dp[m][n];
  let res = '';
  let j = 0;
  let k = 0;
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

/**
 * 0606
 */
// 1216.验证回文字符串Ⅲ
// 思路：s是否可以通过最多删除k个字符构成回文串，可以先求s的最长回文子序列的长度，再看n - k 是否小于等于最长回文子序列的长度
var isValidPalindrome = function (s, k) {
  let n = s.length;

  // dp[i][j]表示字符串s在[i, j]的最长回文子串
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n).fill(0);
    dp[i][i] = 1;
  }

  // 求最长回文子序列的长度
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] == s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
    }
  }

  let lps = dp[0][n - 1];
  return lps + k >= n;
}