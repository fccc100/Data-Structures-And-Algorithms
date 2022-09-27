// 727. 最小窗口子序列
// 给定字符串 S and T，找出 S 中最短的（连续）子串 W ，使得 T 是 W 的 子序列 。

// 如果 S 中没有窗口可以包含 T 中的所有字符，返回空字符串 ""。如果有不止一个最短长度的窗口，返回开始位置最靠左的那个。

// 示例 1：

// 输入：
// S = "abcdebdde", T = "bde"
// 输出："bcde"
// 解释：
// "bcde" 是答案，因为它在相同长度的字符串 "bdde" 出现之前。
// "deb" 不是一个更短的答案，因为在窗口中必须按顺序出现 T 中的元素。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
// 滑动窗口：76.最小覆盖子串的思路
// 以下这种方法很慢，仅超5%
var minWindow = function (s1, s2) {
  // 定义l, r窗口
  // 如果r位置的字符
  let l = 0;
  let r = -1;

  let minLen = Infinity;
  let resL = -1;
  while (r < s1.length) {
    r++;

    // s2是当前窗口的子序列
    while (isSubSequence(s1.substring(l, r + 1), s2) && l <= r) {
      if (r - l + 1 < minLen) {
        minLen = r - l + 1;
        resL = l;
      }
      l++;
    }
  }
  return resL == -1 ? '' : s1.substr(resL, minLen);
}

function isSubSequence(s1, s2) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < s1.length) {
    if (s1[p1] == s2[p2]) {
      p1++;
      p2++;
      if (p2 == s2.length) {
        return true;
      }
    } else {
      p1++;
    }
  }
  return false;
}
