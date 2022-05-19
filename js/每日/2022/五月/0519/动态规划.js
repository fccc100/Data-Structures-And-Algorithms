/**
 * 前一日
 */
// 647. 回文子串
// 统计回文子串个数
var countSubstrings = function(s) {
  let n = s.length;
  if (n <= 1) return n;

  // dp[i][j]表示字符串在[i, j]是否是回文串
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n)
    dp[i][i] = true;
  }

  let ans = 0;
  for (i = n - 1; i >= 0; i--) {
    for (j = i; j < n; j++) {
      if (s[i] != s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i + 1 <= 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j]) {
        ans ++;
      }
    }
  }
  return ans;
}

// 5. 最长回文子串
var longestPalindrome = function(s) {
  let n = s.length;
  if (n <= 1) return s;

  // dp[i][j]表示字符串在[i, j]范围是否回文子串
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n);
    dp[i][i] = true;
  }

  let maxLen = 1;
  let start = 0;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] != s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i + 1 <= 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        start = i;
      }
    }
  }

  return s.substr(start, maxLen);
}

/**
 * 0519
 */

//  516. 最长回文子序列
var longestPalindromeSubseq = function(s) {
  let n = s.length;
  if (n <= 1) return n;

  // dp[i][j]表示字符串在[i, j]范围的最长回文子序列的长度
  let dp = Array(n);
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = Array(n).fill(0);
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      if (s[i] != s[j]) {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      } else {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      }
    }
  }
  return dp[0][n - 1];
};