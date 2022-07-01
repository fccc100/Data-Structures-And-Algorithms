// 1278. 分割回文串 III
// 给你一个由小写字母组成的字符串 s，和一个整数 k。

// 请你按下面的要求分割字符串：

// 首先，你可以将 s 中的部分字符修改为其他的小写英文字母。
// 接着，你需要把 s 分割成 k 个非空且不相交的子串，并且每个子串都是回文串。
// 请返回以这种方式分割字符串所需修改的最少字符数。

// 示例 1：

// 输入：s = "abc", k = 2
// 输出：1
// 解释：你可以把字符串分割成 "ab" 和 "c"，并修改 "ab" 中的 1 个字符，将它变成回文串。
// 示例 2：

// 输入：s = "aabbc", k = 3
// 输出：0
// 解释：你可以把字符串分割成 "aa"、"bb" 和 "c"，它们都是回文串。
// 示例 3：

// 输入：s = "leetcode", k = 8
// 输出：0

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

//  s = "abc", k = 2

var palindromePartition = function(s, k) {
  let n = s.length;

  // dp[i][j]表示字符串s在[0, i]范围内分割j次所需修改的最少字符数
  let dp = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = Array(k + 1).fill(Infinity);
  }
  dp[0][0] = 0;

  // 状态转移
  // 遍历以i结尾的[0, i]字符串
  for (let i = 1; i <= n; i++) {
    // 遍历分割次数，前i个字符最多分割i次
    for (let j = 1; j <= Math.min(k, i); j++) {
      // 如果分割一次，就看从0到i - 1的分割次数
      if (j == 1) {
        dp[i][j] = cut(s, 0, i - 1);
      } else {
        // 不止分割一次
        // 这里是从0开始遍历 0 到 i - 1 分割j - 1次的最小修改次数
        // 但是分割j - 1次无需从0，开始，从j - 1开始即可
        // for (let i0 = 0; i0 < i; i0++) {
        for (let i0 = j - 1; i0 < i; i0++) {
          dp[i][j] = Math.min(dp[i][j], dp[i0][j - 1] + cut(s, i0, i - 1));
        }
      }
    } 
  }
  return dp[n][k];
};

function cut(s, l, r) {
  let res = 0;
  while(l < r) {
    if (s[l] != s[r]) {
      res++;
    }
    l++;
    r--;
  }
  return res;
}