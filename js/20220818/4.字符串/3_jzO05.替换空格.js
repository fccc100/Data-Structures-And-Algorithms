// 剑指 Offer 05. 替换空格
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

// 示例 1：

// 输入：s = "We are happy."
// 输出："We%20are%20happy."

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] != ' ') {
      res += s[i];
    } else {
      res += '%20';
    }
  }
  return res;
};