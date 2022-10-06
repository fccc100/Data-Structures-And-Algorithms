// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

/**
 * @param {string} s
 * @return {number}
 */

// 1.动态规划
var lengthOfLongestSubstring = function(s) {
  let n = s.length;
  if (n <= 1) return n;

  // 任意字符，开256个空间就够了
  let map = Array(256).fill(-1);
  map[s[0].charCodeAt()] = 0;

  // dp[i]:以i位置结尾的无重复字符的最长子串
  let dp = Array(n);
  dp[0] = 1;

  let max = dp[0];
  for (let i = 1; i < n; i ++) {
    let charCode = s[i].charCodeAt();
    dp[i] = Math.min(dp[i - 1] + 1, i - map[charCode]);
    map[charCode] = i;

    max = Math.max(max, dp[i]);
  }
  return max;
};

// 2.滑动窗口 abcabcbb
var lengthOfLongestSubstring = function(s) {
  let l = 0;
  let r = -1;

  let set = new Set();
  let max = 0;
  // 对于每个l都找到r能滑到的最远距离，并把l字符删除，继续下一轮
  // 下一轮从上一轮找到的r位置继续向右滑动

  // 这两种循环条件都可以
  // while(r + 1 < s.length) {
  while(l < s.length) {
    while(r + 1 < s.length && !set.has(s[r + 1])) {
      set.add(s[r + 1]);
      r++;
    }
    max = Math.max(max, r - l + 1);
    set.delete(s[l]);
    l++;
  }
  return max;
}

// 20220623
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let r = -1;

  for (let i = 0; i < s.length; i++) {
    
  }
};