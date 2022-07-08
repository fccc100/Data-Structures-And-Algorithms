// 剑指 Offer II 014. 字符串中的变位词
// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的某个变位词。

// 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。

// 示例 1：

// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").
// 示例 2：

// 输入: s1= "ab" s2 = "eidboaoo"
// 输出: False

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  // let map = new Map();
  // for (let i = 0; i < s1.length; i++) {
  //   if (!map.has(s1[i])) {
  //     map.set(s1[i], 1);
  //   } else {
  //     map.set(s1[i], map.get(s1[i]) + 1);
  //   }
  // }

  // for (let i = 0; i < s2.length; i++) {
  //   if (map.has(s2[i])) {
  //     map.set(s2[i], map.get(s2[i]) - 1);
  //     if (map.get(s2[i]) == 0) {
  //       map.delete(s2[i]);
  //     }
  //   }
  // }

  // return map.size == 0;
};