// 剑指 Offer II 020. 回文子字符串的个数
// 给定一个字符串 s ，请计算这个字符串中有多少个回文子字符串。

// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

function countSubstrings(s) {
  
}

// 动态规划
function countSubstrings(s) {
  // 状态定义dp[i][j]表示字符串[i, j]是否为回文串
  let dp = Array(s.length);
  for (let i = 0; i < s.length; i++) {
    dp[i] = Array(s.length);
    dp[i][i] = true;
  }

  // 状态转移
  let count = s.length;
  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        if (j - i + 1 <= 2) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }
      if (dp[i][j]) {
        count ++;
      }
    }
  }

  return count;
}
