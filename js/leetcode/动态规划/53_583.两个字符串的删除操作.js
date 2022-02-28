// 583. 两个字符串的删除操作
// 给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。

// 每步 可以删除任意一个字符串中的一个字符

// 示例 1：
// 输入: word1 = "sea", word2 = "eat"
// 输出: 2
// 解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"

// 递归
function minDistance(word1, word2) {

  // 递归函数定义：word1在[0, index1]和word2在[0, index2]范围 所需的最小步数
  function _minDistance(word1, word2, index1, index2) {
    if (index1 < 0) {
      return index2 + 1;
    }
    if (index2 < 0) {
      return index1 + 1;
    }

    // 如果最后一个字符相等，则只需要看index1 - 1, index2 - 1处需要的最小步数
    // 如果最后一个字符不相等，则看index1, index2 - 1和index1 - 1， index2两者的较小值
    if (word1[index1] === word2[index2]) {
      return _minDistance(word1, word2, index1 - 1, index2 - 1);
    } else {
      return Math.min(_minDistance(word1, word2, index1 - 1, index2), _minDistance(word1, word2, index1, index2 - 1)) + 1;
    }
  }

  return _minDistance(word1, word2, word1.length - 1, word2.length - 1);
}

// 记忆化搜索
function minDistance(word1, word2) {
  let memo = Array(word1.length);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = Array(word2.length);
  }
  function _minDistance(word1, word2, index1, index2) {
    if (index1 < 0) {
      return index2 + 1;
    }
    if (index2 < 0) {
      return index1 + 1;
    }
    if (memo[index1][index2] !== undefined) {
      return memo[index1][index2];
    }

    // 如果最后一个字符相等，则只需要看index1 - 1, index2 - 1处需要的最小步数
    // 如果最后一个字符不相等，则看index1, index2 - 1和index1 - 1， index2两者的较小值
    if (word1[index1] === word2[index2]) {
      return memo[index1][index2] = _minDistance(word1, word2, index1 - 1, index2 - 1);
    } else {
      return memo[index1][index2] = Math.min(_minDistance(word1, word2, index1 - 1, index2), _minDistance(word1, word2, index1, index2 - 1)) + 1;
    }
  }

  return _minDistance(word1, word2, word1.length - 1, word2.length - 1);
}

// 动态规划
function minDistance(word1, word2) {
  // 状态定义：dp[i][j]表示word1从[0, i]和word2从[0, j]所需的最小步数
  let dp = Array(word1.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(word2.length + 1);
    dp[i][0] = i;
  }
  for (let i = 0; i <= word2.length; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[word1.length][word2.length];
}