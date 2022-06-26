// 面试题 17.11. 单词距离
// 有个内含单词的超大文本文件，给定任意两个不同的单词，找出在这个文件中这两个单词的最短距离(相隔单词数)。如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，你能对此优化吗?

// 示例：

// 输入：words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
// 输出：1

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
  let index1 = -1;
  let index2 = -1;

  let min = words.length + 1;
  for (let i = 0; i < words.length; i++) {
    if (words[i] == word1) {
      if (index2 > -1) {
        min = Math.min(min, i - index2);
      }
      index1 = i;
    }
    if (words[i] == word2) {
      if (index1 > -1) {
        min = Math.min(min, i - index1);
      }
      index2 = i;
    }
  }
  return min;
};