// 647. 回文子串
// 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

// 回文字符串 是正着读和倒过来读一样的字符串。

// 子字符串 是字符串中的由连续字符组成的一个序列。

// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

function countSubstrings(s) {
  
}

// 动态规划
function countSubstrings(s) {
  // 状态定义：dp[i][j]表示字符串s在[i,j]范围子字符串是否为回文串
  let dp = Array(s.length);
  for (let i = 0; i < s.length; i++) {
    dp[i] = Array(s.length);
    dp[i][i] = true;
  }

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