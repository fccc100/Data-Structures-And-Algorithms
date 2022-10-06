// 159. 至多包含两个不同字符的最长子串
// 给你一个字符串 s ，请你找出 至多 包含 两个不同字符 的最长子串，并返回该子串的长度。
 
// 示例 1：

// 输入：s = "eceba"
// 输出：3
// 解释：满足题目要求的子串是 "ece" ，长度为 3 。
// 示例 2：

// 输入：s = "ccaabbb"
// 输出：5
// 解释：满足题目要求的子串是 "aabbb" ，长度为 5 。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  let res = 0;

  let l = 0;
  let r = -1;
  let map = new Map();

  while (r < s.length) {
    if (map.size <= 2) {
      r++;
      if (r >= s.length) break;
      map.set(s[r], map.has(s[r]) ? map.get(s[r]) + 1 : 1);
    } else {
      map.set(s[l], map.get(s[l]) - 1);
      if (map.get(s[l]) == 0) {
        map.delete(s[l]);
      }
      l++;
    }
    if (map.size <= 2) {
      res = Math.max(res, r - l + 1);
    }
  }
  return res;
};