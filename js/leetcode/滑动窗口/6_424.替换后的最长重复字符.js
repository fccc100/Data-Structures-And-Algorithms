// 424. 替换后的最长重复字符
// 给你一个字符串 s 和一个整数 k 。你可以选择字符串中的任一字符，并将其更改为任何其他大写英文字符。该操作最多可执行 k 次。

// 在执行上述操作后，返回包含相同字母的最长子字符串的长度。

// 示例 1：

// 输入：s = "ABAB", k = 2
// 输出：4
// 解释：用两个'A'替换为两个'B',反之亦然。
// 示例 2：

// 输入：s = "AABABBA", k = 1
// 输出：4
// 解释：
// 将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
// 子串 "BBBB" 有最长重复字母, 答案为 4。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  if (s.length == 1) return 1;

  let l = 0;
  let r = 0;

  let map = Array(26).fill(0);
  let maxCount = 0;
  let res = 0;
  while(r < s.length) {
    map[s[r].charCodeAt() - 'A'.charCodeAt()]++;
    maxCount = Math.max(maxCount, map[s[r].charCodeAt() - 'A'.charCodeAt()]);

    if (r - l - maxCount <= k) {
      map[s[l].charCodeAt() - 'A'.charCodeAt()]--;
      l++;
    }
    res = Math.max(res, r - l);
  }
  return res;
};