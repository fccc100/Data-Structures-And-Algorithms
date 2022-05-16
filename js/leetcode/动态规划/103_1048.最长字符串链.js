// 1048. 最长字符串链
// 给出一个单词数组 words ，其中每个单词都由小写英文字母组成。

// 如果我们可以 不改变其他字符的顺序 ，在 wordA 的任何地方添加 恰好一个 字母使其变成 wordB ，那么我们认为 wordA 是 wordB 的 前身 。

// 例如，"abc" 是 "abac" 的 前身 ，而 "cba" 不是 "bcad" 的 前身
// 词链是单词 [word_1, word_2, ..., word_k] 组成的序列，k >= 1，其中 word1 是 word2 的前身，word2 是 word3 的前身，依此类推。一个单词通常是 k == 1 的 单词链 。

// 从给定单词列表 words 中选择单词组成词链，返回 词链的 最长可能长度 。

// 示例 1：

// 输入：words = ["a","b","ba","bca","bda","bdca"]
// 输出：4
// 解释：最长单词链之一为 ["a","ba","bda","bdca"]
// 示例 2:

// 输入：words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
// 输出：5
// 解释：所有的单词都可以放入单词链 ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"].
// 示例 3:

// 输入：words = ["abcd","dbqca"]
// 输出：1
// 解释：字链["abcd"]是最长的字链之一。
// ["abcd"，"dbqca"]不是一个有效的单词链，因为字母的顺序被改变了。

var longestStrChain = function(words) {
  let n = words.length;
  if (n == 0) return 0;
  // 先以长度排序
  words.sort((a, b) => a.length - b.length);

  // dp[i]表示以i结尾的最长字符串链
  let dp = Array(n).fill(1);
  dp[0] = 1;
  let ans = dp[0];
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      // 如果是前身，更新最大长度
      if (isMatch(words[i], words[j])) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
      ans = Math.max(ans, dp[i]);
    }
  }

  return ans;
};

// 判断s2是否是s1的前身
function isMatch(s1, s2) {
  if (s1.length != s2.length + 1) return false;

  let index = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == s2[index]) {
      index++;
    }
  }
  if (index == s2.length) {
    return true;
  }
  return false;
}