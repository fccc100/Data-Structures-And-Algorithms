// 242. 有效的字母异位词
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let sMap = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    sMap[s[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  let tMap = Array(26).fill(0);
  for (let i = 0; i < t.length; i++) {
    tMap[t[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  for (let i = 0; i < sMap.length; i++) {
    if (sMap[i] != tMap[i]) {
      return false;
    }
  }
  return true;
};