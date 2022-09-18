// 6181. 最长的字母序连续子字符串的长度
// 字母序连续字符串 是由字母表中连续字母组成的字符串。换句话说，字符串 "abcdefghijklmnopqrstuvwxyz" 的任意子字符串都是 字母序连续字符串 。

// 例如，"abc" 是一个字母序连续字符串，而 "acb" 和 "za" 不是。
// 给你一个仅由小写英文字母组成的字符串 s ，返回其 最长 的 字母序连续子字符串 的长度。

// 示例 1：

// 输入：s = "abacaba"
// 输出：2
// 解释：共有 4 个不同的字母序连续子字符串 "a"、"b"、"c" 和 "ab" 。
// "ab" 是最长的字母序连续子字符串。
// 示例 2：

// 输入：s = "abcde"
// 输出：5
// 解释："abcde" 是最长的字母序连续子字符串。

/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  let n = s.length;
  if (n == 0) return 0;
  if (n == 1) return 1;

  let cur = s[0].charCodeAt() - 'a'.charCodeAt();
  let curLen = 1;

  let res = 1;
  for (let i = 1; i < s.length; i++) {
    let code = s[i].charCodeAt() - 'a'.charCodeAt();
    if (code == cur + 1) {
      cur = code;
      curLen++;
    } else {
      cur = code;
      curLen = 1;
    }
    
    res = Math.max(res, curLen);
  }
  return res;
};