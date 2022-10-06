// 1055. 形成字符串的最短路径
// 对于任何字符串，我们可以通过删除其中一些字符（也可能不删除）来构造该字符串的 子序列 。(例如，“ace” 是 “abcde” 的子序列，而 “aec” 不是)。

// 给定源字符串 source 和目标字符串 target，返回 源字符串 source 中能通过串联形成目标字符串 target 的 子序列 的最小数量 。
// 如果无法通过串联源字符串中的子序列来构造目标字符串，则返回 -1。

// 示例 1：

// 输入：source = "abc", target = "abcbc"
// 输出：2
// 解释：目标字符串 "abcbc" 可以由 "abc" 和 "bc" 形成，它们都是源字符串 "abc" 的子序列。
// 示例 2：

// 输入：source = "abc", target = "acdbc"
// 输出：-1
// 解释：由于目标字符串中包含字符 "d"，所以无法由源字符串的子序列构建目标字符串。
// 示例 3：

// 输入：source = "xyz", target = "xzyxz"
// 输出：3
// 解释：目标字符串可以按如下方式构建： "xz" + "y" + "xz"。

/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
  let sp = 0, ans = 1;
  let sn = source.length, tn = target.length;
  let next = Array(sn + 1);
  for (let i = 0; i < sn + 1; i++) {
    next[i] = Array(26).fill(-1);
  }
  for (let i = sn - 1; i >= 0; --i) {
    next[sn][source[i].charCodeAt() - 'a'.charCodeAt()] = i;
  }
  for (let i = sn - 1; i >= 0; --i) {
    let c = source[i].charCodeAt() - 'a'.charCodeAt();
    for (let j = 0; j < 26; ++j) {
      if (j == c) {
        next[i][j] = i;
      } else {
        next[i][j] = next[i + 1][j];
      }
    }
  }
  for (let i = 0; i < target.length; i++) {
    let c = target[i].charCodeAt() - 'a'.charCodeAt();
    if (next[sp][c] == -1) return -1;
    if (next[sp][c] < sp) ++ans;
    sp = next[sp][c] + 1;
  }

  return ans;
}