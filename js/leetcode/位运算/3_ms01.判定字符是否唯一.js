// 面试题 01.01. 判定字符是否唯一
// 实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

// 示例 1：

// 输入: s = "leetcode"
// 输出: false 

/**
 * @param {string} astr
 * @return {boolean}
 */
// set
var isUnique = function(astr) {
  let set = new Set();
  for (let i = 0; i < astr.length; i++) {
    if (set.has(astr[i])) {
      return false;
    } else {
      set.add(astr[i]);
    }
  }
  return true;
};

// 位运算
var isUnique = function(astr) {
  let mark = 0;
  for (let i = 0; i < astr.length; i++) {
    let moveBit = astr[i].charCodeAt() - 'a'.charCodeAt();
    if ((mark & (1 << moveBit)) != 0) {
      return false;
    } else {
      mark = mark | (1 << moveBit);
    }
  }
  return true;
};

