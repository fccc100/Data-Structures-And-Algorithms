// 6177. 子字符串的最优划分
// 给你一个字符串 s ，请你将该字符串划分成一个或多个 子字符串 ，并满足每个子字符串中的字符都是 唯一 的。也就是说，在单个子字符串中，字母的出现次数都不超过 一次 。

// 满足题目要求的情况下，返回 最少 需要划分多少个子字符串。

// 注意，划分后，原字符串中的每个字符都应该恰好属于一个子字符串。

// 示例 1：

// 输入：s = "abacaba"
// 输出：4
// 解释：
// 两种可行的划分方法分别是 ("a","ba","cab","a") 和 ("ab","a","ca","ba") 。
// 可以证明最少需要划分 4 个子字符串。
// 示例 2：

// 输入：s = "ssssss"
// 输出：6
// 解释：
// 只存在一种可行的划分方法 ("s","s","s","s","s","s") 。

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let map = Array(26).fill(0);

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt() - 'a'.charCodeAt();
    if (map[index] > 0) {
      res++;
      map.fill(0);
      map[index]++;
    } else {
      map[index]++;
    }
  }
  return res + 1;
};