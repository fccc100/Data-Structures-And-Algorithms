// 318. 最大单词长度乘积
// 给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 0 。

// 示例 1：

// 输入：words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// 输出：16 
// 解释：这两个单词为 "abcw", "xtfn"。
// 示例 2：

// 输入：words = ["a","ab","abc","d","cd","bcd","abcd"]
// 输出：4 
// 解释：这两个单词为 "ab", "cd"。
// 示例 3：

// 输入：words = ["a","aa","aaa","aaaa"]
// 输出：0 
// 解释：不存在这样的两个单词。

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let n = words.length;

  let masks = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let word = words[i];

    for (let j = 0; j < word.length; j++) {
      masks[i] |= (1 << word[j].charCodeAt() - 'a'.charCodeAt());
    }
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((masks[i] & masks[j]) == 0) {
        res = Math.max(res, words[i].length * words[j].length);
      }
    }
  }
  return res;
};