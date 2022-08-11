// 1358. 包含所有三种字符的子字符串数目
// 给你一个字符串 s ，它只包含三种字符 a, b 和 c 。

// 请你返回 a，b 和 c 都 至少 出现过一次的子字符串数目。

// 示例 1：

// 输入：s = "abcabc"
// 输出：10
// 解释：包含 a，b 和 c 各至少一次的子字符串为 "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" 和 "abc" (相同字符串算多次)。
// 示例 2：

// 输入：s = "aaacb"
// 输出：3
// 解释：包含 a，b 和 c 各至少一次的子字符串为 "aaacb", "aacb" 和 "acb" 。
// 示例 3：

// 输入：s = "abc"
// 输出：1

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let len = s.length;
  let ans = 0;
  let cnt = Array(3).fill(0);

  for (let l = 0, r = -1; l < len;) {
    while (r < len && !(cnt[0] >= 1 && cnt[1] >= 1 && cnt[2] >= 1)) {
      r++;
      if (r >= len) break;
      cnt[s[r].charCodeAt() - 'a'.charCodeAt()]++;
    }
    ans += len - r;
    cnt[s[l].charCodeAt() - 'a'.charCodeAt()]--;
    l++;
  }
  return ans;
};
