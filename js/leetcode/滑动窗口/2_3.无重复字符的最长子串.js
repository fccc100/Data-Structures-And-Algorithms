// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstring = function(s) {
  let set = new Set();

  let r = -1;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (i > 0) {
      set.delete(s[i - 1]);
    }
    while(r + 1 < s.length && !set.has(s[r + 1])) {
      set.add(s[r + 1]);
      r++;
    }
    res = Math.max(res, r - i + 1);
  }
  return res;
};

// 动态规划
// aab
var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0;
  // map[i]表示i这个字符出现的位置
  let map = Array(256).fill(-1);
  map[s[0].charCodeAt()] = 0;

  let dp = Array(s.length).fill(0);
  dp[0] = 1;

  let max = 1;
  for (let i = 1; i < s.length; i++) {
    dp[i] = Math.min(dp[i - 1] + 1, i - map[s[i].charCodeAt()]);

    max = Math.max(dp[i], max);
    map[s[i].charCodeAt()] = i;
  }

  return max;
};