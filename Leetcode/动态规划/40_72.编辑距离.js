// 72. 编辑距离
// 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

// 你可以对一个单词进行如下三种操作：

// 插入一个字符
// 删除一个字符
// 替换一个字符

// 示例 1：
// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')

// 递归
function minDistance(word1, word2) {
  function _minDistance(word1, word2, index1, index2) {
    if (index1 < 0) {
      return index2 + 1;
    }
    if (index2 < 0) {
      return index1 + 1;
    }

    if (word1[index1] === word2[index2]) {
      return _minDistance(word1, word2, index1 - 1, index2 - 1);
    } else {
      return Math.min(
        _minDistance(word1, word2,index1, index2 - 1) + 1, // 插入
        _minDistance(word1, word2, index1 - 1, index2) + 1, // 删除
        _minDistance(word1, word2, index1 - 1, index2 - 1) + 1, // 替换
      )
    }
  }

  return _minDistance(word1, word2, word1.length - 1, word2.length - 1);
}

// 记忆化搜索
function minDistance(word1, word2) {
  let memo = Array(word1.length);
  for (let i = 0; i < word1.length; i++) {
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

    if (word1[index1] === word2[index2]) {
      return memo[index1][index2] = _minDistance(word1, word2, index1 - 1, index2 - 1);
    } else {
      return memo[index1][index2] = Math.min(
        _minDistance(word1, word2,index1, index2 - 1) + 1, // 插入
        _minDistance(word1, word2, index1 - 1, index2) + 1, // 删除
        _minDistance(word1, word2, index1 - 1, index2 - 1) + 1, // 替换
      )
    }

  }

  return _minDistance(word1, word2, word1.length - 1, word2.length - 1);
}

// 动态规划
function minDistance(word1, word2) {
  // 状态定义：dp[i][j]表示word1在[0, i]范围与word2在[0, j]范围的最小编辑距离
  let dp = Array(word1.length + 1);
  for (let i = 0; i <= word1.length; i++) {
    dp[i] = Array(word2.length + 1);
    dp[i][0] = i;
  }

  // 状态初始化:
  for (let i = 0; i <= word2.length; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i][j - 1] + 1, dp[i - 1][j] + 1, dp[i - 1][j - 1] + 1)
      }
    }
  }

  return dp[word1.length][word2.length];
}