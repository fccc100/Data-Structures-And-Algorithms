// 567. 字符串的排列
// 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

// 换句话说，s1 的排列之一是 s2 的 子串 。

// 示例 1：

// 输入：s1 = "ab" s2 = "eidbaooo"
// 输出：true
// 解释：s2 包含 s1 的排列之一 ("ba").
// 示例 2：

// 输入：s1= "ab" s2 = "eidboaoo"
// 输出：false

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let m = s1.length;
  let n = s2.length;
  if (m > n) return false;

  let count1 = Array(26).fill(0);
  let count2 = Array(26).fill(0);

  // 先计算s1、s2前m个字符出现的频率
  for (let i = 0; i < m; i++) {
    count1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
    count2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  // 如果频率一样，直接返回true
  if (count1.toString() == count2.toString()) {
    return true;
  }

  // 从m位置开始，每次把i - m位置的字符频率减一，把当前位置的字符频率加一，之后判断两个数组是否相等
  for (let i = m; i < n; i++) {
    count2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
    count2[s2[i - m].charCodeAt() - 'a'.charCodeAt()]--;
    if (count2.toString() == count1.toString()) {
      return true;
    }
  }
  return false;
};