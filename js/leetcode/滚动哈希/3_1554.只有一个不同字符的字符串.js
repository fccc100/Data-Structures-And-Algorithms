// 1554. 只有一个不同字符的字符串
// 给定一个字符串列表 dict ，其中所有字符串的长度都相同。

// 当存在两个字符串在相同索引处只有一个字符不同时，返回 True ，否则返回 False 。

// 示例 1：

// 输入：dict = ["abcd","acbd", "aacd"]
// 输出：true
// 解释：字符串 "abcd" 和 "aacd" 只在索引 1 处有一个不同的字符。
// 示例 2：

// 输入：dict = ["ab","cd","yz"]
// 输出：false
// 示例 3：

// 输入：dict = ["abcd","cccc","abyd","abab"]
// 输出：true

/**
 * @param {string[]} dict
 * @return {boolean}
 */
// 暴力，勉强通过
var differByOne = function(dict) {
  for (let i = 0; i < dict.length; i++) {
    for (let j = i + 1; j < dict.length; j++) {
      let l1 = 0;
      let l2 = 0;

      let diff = 0;
      while (l1 < dict[i].length) {
        if (dict[i][l1] != dict[j][l2]) {
          diff++;
        }
        l1++;
        l2++;
      }
      if (diff == 1) {
        return true;
      }
    }
  }
  return false;
};

// zdb 26 * 26^3 + 3 * 26^1 + 1
// zcb 26 * 26^3 + 2 * 26^1 + 1
var differByOne = function(dict) {

}