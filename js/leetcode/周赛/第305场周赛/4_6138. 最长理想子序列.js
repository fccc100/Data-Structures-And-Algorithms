// 6138. 最长理想子序列
// 给你一个由小写字母组成的字符串 s ，和一个整数 k 。如果满足下述条件，则可以将字符串 t 视作是 理想字符串 ：

// t 是字符串 s 的一个子序列。
// t 中每两个 相邻 字母在字母表中位次的绝对差值小于或等于 k 。
// 返回 最长 理想字符串的长度。

// 字符串的子序列同样是一个字符串，并且子序列还满足：可以经由其他字符串删除某些字符（也可以不删除）但不改变剩余字符的顺序得到。

// 注意：字母表顺序不会循环。例如，'a' 和 'z' 在字母表中位次的绝对差值是 25 ，而不是 1 。

// 示例 1：

// 输入：s = "acfgbd", k = 2
// 输出：4
// 解释：最长理想字符串是 "acbd" 。该字符串长度为 4 ，所以返回 4 。
// 注意 "acfgbd" 不是理想字符串，因为 'c' 和 'f' 的字母表位次差值为 3 。
// 示例 2：

// 输入：s = "abcd", k = 3
// 输出：4
// 解释：最长理想字符串是 "abcd" ，该字符串长度为 4 ，所以返回 4 。

// 记忆化搜索，O(n^2)的实现，超时
var longestIdealString = function (s, k) {

  let memo = Array(s.length);

  function f(s, k, index) {
    if (index == 0) {
      return 1;
    }

    if (memo[index] !== undefined) {
      return memo[index];
    }

    let max = 1;
    for (let i = index - 1; i >= 0; i--) {
      if (Math.abs(s[index].charCodeAt() - s[i].charCodeAt()) <= k) {
        max = Math.max(max, f(s, k, i) + 1);
      }
    }
    return memo[index] = max;
  }

  let max = 1;
  for (let i = 0; i < s.length; i++) {
    max = Math.max(max, f(s, k, i));
  }
  return max;
};

// 动态规划，用map记录每个字符最后出现位置的最长理想字符串长度 O(n)
var longestIdealString = function (s, k) {
  let n = s.length;

  // dp[i]: 以i位置结尾的最长理想字符串的长度
  let dp = Array(n).fill(0);

  dp[0] = 1;

  let map = new Map();
  map.set(s[0], 1);

  let max = dp[0];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= 26; j++) {
      let char = String.fromCharCode(j + 'a'.charCodeAt());
      if (map.has(char)) {
        if (Math.abs(s[i].charCodeAt() - char.charCodeAt()) <= k) {
          dp[i] = Math.max(dp[i], map.get(char) + 1);
        }
      }
    }
    map.set(s[i], Math.max(dp[i], 1));
    max = Math.max(max, dp[i]);
  }

  return max;
};