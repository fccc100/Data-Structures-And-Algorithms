// 115. 不同的子序列
// 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

// 字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

// 示例 1：
// 输入：s = "rabbbit", t = "rabbit"
// 输出：3
// 解释：
// 如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
// rabbbit
// rabbbit
// rabbbit

// 递归
function numDistinct(s, t) {
  // 递归函数定义：s从index1到结尾能组成t从index2到结尾的个数
  function _numDistinct(s, t, index1, index2) {
    if (index2 >= t.length) {
      return 1;
    }
    if (index1 >= s.length) {
      return 0;
    }

    if (s[index1] === t[index2]) {
      return _numDistinct(s, t, index1 + 1, index2 + 1) + _numDistinct(s, t, index1 + 1, index2);
    } else {
      return _numDistinct(s, t, index1 + 1, index2);
    }
  }

  return _numDistinct(s, t, 0, 0);
}

// 记忆化搜索
function numDistinct(s, t) {
  let memo = Array(s.length);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = Array(t.length);
  }
  function _numDistinct(s, t, index1, index2) {
    if (index2 >= t.length) {
      return 1;
    }
    if (index1 >= s.length) {
      return 0;
    }
    if (memo[index1][index2] !== undefined) {
      return memo[index1][index2];
    }

    if (s[index1] === t[index2]) {
      return memo[index1][index2] = _numDistinct(s, t, index1 + 1, index2 + 1) + _numDistinct(s, t, index1 + 1, index2);
    } else {
      return memo[index1][index2] = _numDistinct(s, t, index1 + 1, index2);
    }
  }

  return _numDistinct(s, t, 0, 0);
}

// 动态规划
function numDistinct(s, t) {
  let m = s.length;
  let n = t.length;

  // 状态定义：dp[i][j]表示s从i到结尾能组成t从j到结尾的个数
  let dp = Array(m + 1);

  // 状态初始化：s为空字符串组成t时为0， s组成空字符串t时为1
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(n + 1);
    dp[i].fill(0);
    dp[i][n] = 1;
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s[i] === t[j]) {
        dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
      } else {
        dp[i][j] = dp[i + 1][j];
      }
    }
  }

  return dp[0][0];
}