// 剑指 Offer II 094. 最少回文分割
// 给定一个字符串 s，请将 s 分割成一些子串，使每个子串都是回文串。

// 返回符合要求的 最少分割次数 。

// 示例 1：

// 输入：s = "aab"
// 输出：1
// 解释：只需一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。
// 示例 2：

// 输入：s = "a"
// 输出：0
// 示例 3：

// 输入：s = "ab"
// 输出：1

/**
 * @param {string} s
 * @return {number}
 */
// 同132题
var minCut = function(s) {
  let n = s.length;
  if (!n) return 0;

  let isPalindrome = Array(n);
  for (let i = n - 1; i >= 0; i--) {
    isPalindrome[i] = Array(n).fill(false);
    isPalindrome[i][i] = true;
    for (let j = i + 1; j < n; j++) {
      if (s[i] != s[j]) {
        isPalindrome[i][j] = false;
      } else {
        if (j - i <= 2) {
          isPalindrome[i][j] = true;
        } else {
          isPalindrome[i][j] = isPalindrome[i + 1][j - 1];
        }
      }
    }
  }

  let dp = Array(n).fill(n + 1);
  dp[0] = 0;
  for (let i = 1; i < n; i++) {
    if (isPalindrome[0][i]) {
      dp[i] = 0;
    } else {
      for (let j = 0; j < i; j++) {
        if (isPalindrome[j + 1][i]) {
          dp[i] = Math.min(dp[i], dp[j] + 1);
        }
      }
    }
  }
  return dp[n - 1];
};