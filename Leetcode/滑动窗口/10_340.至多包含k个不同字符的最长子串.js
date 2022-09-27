// 340. 至多包含 K 个不同字符的最长子串
// 给你一个字符串 s 和一个整数 k ，请你找出 至多 包含 k 个 不同 字符的最长子串，并返回该子串的长度。

// 示例 1：

// 输入：s = "eceba", k = 2
// 输出：3
// 解释：满足题目要求的子串是 "ece" ，长度为 3 。
// 示例 2：

// 输入：s = "aa", k = 1
// 输出：2
// 解释：满足题目要求的子串是 "aa" ，长度为 2 。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 滑动窗口
var lengthOfLongestSubstringKDistinct = function(s, k) {
  let res = 0;

  let l = 0;
  let r = -1;
  let map = new Map();
  while (r < s.length) {
    if (map.size <= k) {
      r++;
      if (r >= s.length) break;
      if (!map.has(s[r])) {
        map.set(s[r], 1);
      } else {
        map.set(s[r], map.get(s[r]) + 1);
      }
    } else {
      map.set(s[l], map.get(s[l]) - 1);
      if (map.get(s[l]) == 0) {
        map.delete(s[l]);
      }
      l++;
    }
    if (map.size <= k) {
      res = Math.max(res, r - l + 1);
    }
  }
  return res;
};

// "ecebeea"
// 2

// "a"
// 2