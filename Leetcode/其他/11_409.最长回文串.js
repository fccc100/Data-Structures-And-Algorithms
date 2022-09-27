// 409. 最长回文串
// 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。

// 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。

// 示例 1:

// 输入:s = "abccccdd"
// 输出:7
// 解释:
// 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
// 示例 2:

// 输入:s = "a"
// 输入:1
// 示例 3:

// 输入:s = "bb"
// 输入: 2

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  // 成对匹配,如果最后map里还有元素,可以在中间位置再加一个字符
  let map = new Map();
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) - 1);
      if (map.get(s[i]) == 0) {
        map.delete(s[i]);
      }
      res += 2;
    }
  }
  if (map.size > 0) {
    return res + 1;
  }
  return res;
};