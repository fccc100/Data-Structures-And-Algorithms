// 5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串。

// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

function longestPalindrome(s) {

}

// 动态规划
function longestPalindrome(s) {
  // 状态定义：dp[i][j]表示字符串s在[i, j]范围是否是回文串
  let dp = Array(s.length);

  // 状态初始化：i，j相等时，单个字符肯定是回文
  for (let i = 0; i < s.length; i++) {
    dp[i] = Array(s.length);
    dp[i][i] = true;
  }

  // 状态转移：遍历矩形的一半
  // 当s[i] != s[j] 时，dp[i][j]肯定为false
  // 当s[i] == s[j] 时，
  //    其中 j - i + 1 <= 2 即"aba"这种情况时，可直接判定dp[i][j]为true
  //    j - i + 1 > 2时，dp[i][j] 就看去掉头尾的子字符串是否回文串，即等于 dp[i + 1][j - 1]
  // 遍历计算dp的过程记录当dp[i][j]为true时 的最大长度和最大长度时的起始位置，结束后截取即可
  let start;
  let maxLen = 1;
  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i <= 2) {
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