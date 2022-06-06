// 1216. 验证回文字符串 III
// 给出一个字符串 s 和一个整数 k，若这个字符串是不是一个「k 回文 」，则返回 true 。

// 如果可以通过从字符串中删去最多 k 个字符将其转换为回文，那么这个字符串就是一个「k 回文 」。

// 示例 1：

// 输入：s = "abcdeca", k = 2
// 输出：true
// 解释：删去字符 “b” 和 “e”。
// 示例 2:

// 输入：s = "abbababa", k = 1
// 输出：true

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var isValidPalindrome = function(s, k) {

};

//   a  b  c  d  e  c  a
// a 1                 
// b    1
// c       1
// d          1
// e             1
// c                1  
// a                   1


// "bacabaaa"
// 2
// 递归， 超时
var isValidPalindrome = function(s, k) {
  function __isValidPalindrome(s, l, r, k) {
    if (k < 0) {
      return false;
    }
    if (l >= r) {
      return true;
    }

    if (s[l] == s[r]) {
      return __isValidPalindrome(s, l + 1, r - 1, k);
    } else {
      return __isValidPalindrome(s, l, r - 1, k - 1) || __isValidPalindrome(s, l + 1, r, k - 1) || __isValidPalindrome(s, l + 1, r - 1, k - 2);
    }
  }

  return __isValidPalindrome(s, 0, s.length - 1, k);
}

// 记忆化搜索
// 使用三维数组做记忆化空间太大
var isValidPalindrome = function(s, k) {
  let n = s.length;
  let memo = Array(n);
  for (let i = 0; i < n; i++) {
    memo[i] = Array(n);
    for (let j = 0; j < n; j++) {
      memo[i][j] = Array(k + 1);
    }
  }
  function __isValidPalindrome(s, l, r, k) {
    if (k < 0) {
      return false;
    }
    if (l >= r) {
      return true;
    }

    if (memo[l][r][k] !== undefined) {
      return memo[l][r][k];
    }

    if (s[l] == s[r]) {
      return memo[l][r][k] = __isValidPalindrome(s, l + 1, r - 1, k);
    } else {
      return memo[l][r][k] = __isValidPalindrome(s, l, r - 1, k - 1) || __isValidPalindrome(s, l + 1, r, k - 1) || __isValidPalindrome(s, l + 1, r - 1, k - 2);
    }
  }

  return __isValidPalindrome(s, 0, s.length - 1, k);
}

// 换一种思路：求字符串最多删除k个字符是否回文串，那可以先求字符串的最长回文子串，再看这个最长回文子串的长度 + k是否大于原字符串的长度
var isValidPalindrome = function(s, k) {
  let n = s.length;

  // dp[i][j]表示字符串s在[i, j]的最长回文子串
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n).fill(0);
    dp[i][i] = 1;
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (s[i] == s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
    }
  }

  let lps = dp[0][n - 1];
  return lps + k >= n;
}