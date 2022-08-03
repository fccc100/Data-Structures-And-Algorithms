// 899. 有序队列
// 给定一个字符串 s 和一个整数 k 。你可以从 s 的前 k 个字母中选择一个，并把它加到字符串的末尾。

// 返回 在应用上述步骤的任意数量的移动后，字典上最小的字符串 。

// 示例 1：

// 输入：s = "cba", k = 1
// 输出："acb"
// 解释：
// 在第一步中，我们将第一个字符（“c”）移动到最后，获得字符串 “bac”。
// 在第二步中，我们将第一个字符（“b”）移动到最后，获得最终结果 “acb”。
// 示例 2：

// 输入：s = "baaca", k = 3
// 输出："aaabc"
// 解释：
// 在第一步中，我们将第一个字符（“b”）移动到最后，获得字符串 “aacab”。
// 在第二步中，我们将第三个字符（“c”）移动到最后，获得最终结果 “aaabc”。

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// k = 1时，每种情况尝试得出字典序最小的字符串
// k > 1时，可以通过移动获得任意字符串，直接将字符串排序成字典序最小即可
var orderlyQueue = function(s, k) {
  let res = s;
  if (k == 1) {
    for (let i = 0; i < s.length - 1; i++) {
      s = s.substring(1) + s[0];
      if (s < res) {
        res = s;
      }
    }
  } else {
    res = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
  }
  return res;
};