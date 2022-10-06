// 243. 最短单词距离
// 给定一个字符串数组 wordDict 和两个已经存在于该数组中的不同的字符串 word1 和 word2 。返回列表中这两个单词之间的最短距离。

// 示例 1:

// 输入: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// 输出: 3
// 示例 2:

// 输入: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
// 输出: 1

/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
  let map = new Map();
  for (let i = 0; i < wordsDict.length; i++) {
    if (!map.has(wordsDict[i])) {
      map.set(wordsDict[i], []);
    }
    map.get(wordsDict[i]).push(i);
  }

  let arr1 = map.get(word1);
  let arr2 = map.get(word2);

  let res = Infinity;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      res = Math.min(res, Math.abs(arr1[i] - arr2[j]));
    }
  }
  return res;
};

// 一次遍历 O(n)
var shortestDistance = function(wordsDict, word1, word2) {
  let index1 = -1;
  let index2 = -1;

  let res = Infinity;
  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] == word1) {
      index1 = i;
    } else if (wordsDict[i] == word2) {
      index2 = i;
    }

    if (index1 >= 0 && index2 >= 0) {
      res = Math.min(res, Math.abs(index1 - index2));
    }
  }
  return res;
}