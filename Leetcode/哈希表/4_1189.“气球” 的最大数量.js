// 1189. “气球” 的最大数量
// 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。

// 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。

// 示例 1：

// 输入：text = "nlaebolko"
// 输出：1
// 示例 2：

// 输入：text = "loonbalxballpoon"
// 输出：2
// 示例 3：

// 输入：text = "leetcode"
// 输出：0

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  let map = Array(26).fill(0);

  for (let i = 0; i < text.length; i++) {
    map[text[i].charCodeAt() - 'a'.charCodeAt()] ++;
  }

  let balloon = 'balloon';
  let res = Infinity;
  for (let i = 0; i < balloon.length; i++) {
    if (balloon[i] == 'l' || balloon[i] == 'o') {
      res = Math.min(res, map[balloon[i].charCodeAt() - 'a'.charCodeAt()] >> 1)
    } else {
      res = Math.min(res, map[balloon[i].charCodeAt() - 'a'.charCodeAt()]);
    }
  }
  return res;
};