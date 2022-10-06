// 214. 最短回文串
// 给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。

// 示例 1：

// 输入：s = "aacecaaa"
// 输出："aaacecaaa"
// 示例 2：

// 输入：s = "abcd"
// 输出："dcbabcd"

/**
 * @param {string} s
 * @return {string}
 */
// 先求每个[i, j]是否回文串，最后一个测试用例超出内存了
var shortestPalindrome = function(s) {
  // dp[i][j]表示字符串s在[i, j]范围是否是回文串
  let dp = Array(s.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(s.length).fill(false);
    dp[i][i] = true;
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[j] == s[i]) {
        if (j - i <= 2) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      } else {
        dp[i][j] = false;
      }
    }
  }

  let last = -1;
  for (let i = 0; i < s.length; i++) {
    if (dp[0][i]) {
      last = i;
    }
  }

  let start = last + 1;
  let res = s;
  for (let i = start; i < s.length; i++) {
    res = s[i] + res;
  }
  return res;
};

// 2.
var shortestPalindrome = function(s) {
  
};