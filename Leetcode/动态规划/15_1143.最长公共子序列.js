// 1143. 最长公共子序列
// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

// 示例 1：
// 输入：text1 = "abcde", text2 = "ace" 
// 输出：3  
// 解释：最长公共子序列是 "ace" ，它的长度为 3 。

// 1.递归求解
function longestCommonSubsequence(text1, text2) {

  // 递归函数定义：text1在[0, index1]和text2在[0, index2]的最长公共子序列
  function _longestCommonSubsequence(text1, text2, index1, index2) {
    if (index1 < 0 || index2 < 0) {
      return 0;
    }

    // 如果两个字符串在index1和index2位置相等了，则已经找到一个公共子序列，在index1 - 1和index2 - 1处继续求解
    if (text1[index1] == text2[index2]) {
      return 1 + _longestCommonSubsequence(text1, text2, index1 - 1, index2 - 1);
    } else {

      // 如果最后一个字符不相等，则在index1 - 1，index2 和 index1， index2 - 1处继续求解
      return Math.max(_longestCommonSubsequence(text1, text2, index1 - 1, index2), _longestCommonSubsequence(text1, text2, index1, index2 - 1));
    }
  }

  return _longestCommonSubsequence(text1, text2, text1.length - 1, text2.length - 1);
}

// 2.记忆化搜索, 使用memo二维数组记录index1, index2处的最长公共子序列
function longestCommonSubsequence(text1, text2) {
  let memo = Array(text1.length);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = Array(text2.length);
  }
  function _longestCommonSubsequence(text1, text2, index1, index2) {
    if (index1 < 0 || index2 < 0) {
      return 0;
    }

    if (memo[index1][index2] !== undefined) {
      return memo[index1][index2];
    }

    if (text1[index1] == text2[index2]) {
      return memo[index1][index2] = 1 + _longestCommonSubsequence(text1, text2, index1 - 1, index2 - 1);
    } else {
      return memo[index1][index2] = Math.max(_longestCommonSubsequence(text1, text2, index1 - 1, index2), _longestCommonSubsequence(text1, text2, index1, index2 - 1));
    }
  }

  return _longestCommonSubsequence(text1, text2, text1.length - 1, text2.length - 1);
}

// 3.动态规划
function longestCommonSubsequence(text1, text2) {
  let m = text1.length;
  let n = text2.length;
  // 状态定义：dp[i][j]表示text1，text2在i，j处的最长公共子序列
  let dp = [];

  // 状态初始化时多初始化一行一列，初始状态为0
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    dp[i][0] = 0;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = 0;
  }

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      // 因为多初始化了一行，所以取字符时要使用i - 1， j - 1.
      if (text1[i - 1] == text2[j - 1]) {

        // 如果i，j位置字符相等，则dp[i][j]为dp[i - 1][j - 1] + 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];


  // dp[i][j]表示text1, text2 在[0, i], [0, j]处的最长公共子序列
  // let dp = Array(text1.length);
  // for (let i = 0; i < dp.length; i++) {
  //   dp[i] = Array(text2.length);
  // }
  // dp[0][0] = text1[0] == text2[0] ? 1 : 0;

  // for (let i = 1; i < text1.length; i++) {
  //   dp[i][0] = text1[i] == text2[0] ? dp[i - 1][0] + 1 : dp[i - 1][0];
  // }

  // for (let j = 1; j < text2.length; j++) {
  //   dp[0][j] = text2[j] == text1[0] ? dp[0][j - 1] + 1 : dp[0][j - 1];
  // }

  // for (let i = 1; i < text1.length; i++) {
  //   for (let j = 1; j < text2.length; j++) {
  //     if (text1[i] == text2[j]) {
  //       dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + 1;
  //     } else {
  //       dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
  //     }
  //   }
  // }

  // return dp[text1.length - 1][text2.length - 1];
}