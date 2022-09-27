// 剑指 Offer II 016. 不含重复字符的最长子字符串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子字符串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子字符串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// 示例 4:

// 输入: s = ""
// 输出: 0

/**
 * @param {string} s
 * @return {number}
 */
// 动态规划
var lengthOfLongestSubstring = function(s) {
  let n = s.length;
  if (!n) return 0;

  let dp = Array(n).fill(0);
  dp[0] = 1;

  let map = Array(256).fill(-1);
  map[s[0].charCodeAt()] = 0;

  let max = 1;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.min(dp[i - 1] + 1, i - map[s[i].charCodeAt()]);

    max = Math.max(max, dp[i]);

    map[s[i].charCodeAt()] = i;
  }

  return max;
};

// 滑动窗口
var lengthOfLongestSubstring = function(s) {
  
}