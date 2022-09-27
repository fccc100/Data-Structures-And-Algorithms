// 1876. 长度为三且各字符不同的子字符串
// 如果一个字符串不含有任何重复字符，我们称这个字符串为 好 字符串。

// 给你一个字符串 s ，请你返回 s 中长度为 3 的 好子字符串 的数量。

// 注意，如果相同的好子字符串出现多次，每一次都应该被记入答案之中。

// 子字符串 是一个字符串中连续的字符序列。

// 示例 1：

// 输入：s = "xyzzaz"
// 输出：1
// 解释：总共有 4 个长度为 3 的子字符串："xyz"，"yzz"，"zza" 和 "zaz" 。
// 唯一的长度为 3 的好子字符串是 "xyz" 。
// 示例 2：

// 输入：s = "aababcabc"
// 输出：4
// 解释：总共有 7 个长度为 3 的子字符串："aab"，"aba"，"bab"，"abc"，"bca"，"cab" 和 "abc" 。
// 好子字符串包括 "abc"，"bca"，"cab" 和 "abc" 。

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
  if (s.length < 3) return 0;

  let map = new Map();
  let l = 0;
  let r = 2;

  for (let i = 0; i < 3; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1)
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }

  let res = 0;
  while (r < s.length) {
    if (map.size == 3) {
      res++;
    }

    r++;
    if (r >= s.length) break;
    map.set(s[r], map.has(s[r]) ? map.get(s[r]) + 1 : 1);

    map.set(s[l], map.get(s[l]) - 1);
    if (map.get(s[l]) == 0) {
      map.delete(s[l]);
    }
    l++;
  }
  return res;
};