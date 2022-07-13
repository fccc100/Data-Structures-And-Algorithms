// 126. 单词接龙 II
// 按字典 wordList 完成从单词 beginWord 到单词 endWord 转化，一个表示此过程的 转换序列 是形式上像 beginWord -> s1 -> s2 -> ... -> sk 这样的单词序列，并满足：

// 每对相邻的单词之间仅有单个字母不同。
// 转换过程中的每个单词 si（1 <= i <= k）必须是字典 wordList 中的单词。注意，beginWord 不必是字典 wordList 中的单词。
// sk == endWord
// 给你两个单词 beginWord 和 endWord ，以及一个字典 wordList 。请你找出并返回所有从 beginWord 到 endWord 的 最短转换序列 ，如果不存在这样的转换序列，返回一个空列表。每个序列都应该以单词列表 [beginWord, s1, s2, ..., sk] 的形式返回。

// 示例 1：

// 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// 输出：[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
// 解释：存在 2 种最短的转换序列：
// "hit" -> "hot" -> "dot" -> "dog" -> "cog"
// "hit" -> "hot" -> "lot" -> "log" -> "cog"
// 示例 2：

// 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// 输出：[]
// 解释：endWord "cog" 不在字典 wordList 中，所以不存在符合要求的转换序列。

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
// 广度优先遍历，超时
var findLadders = function (beginWord, endWord, wordList) {
  let wordSet = new Set();
  for (let i = 0; i < wordList.length; i++) {
    wordSet.add(wordList[i]);
  }

  if (wordSet.size == 0 || !wordSet.has(endWord)) {
    return [];
  }

  wordSet.delete(beginWord)

  let queue = [];
  queue.push([beginWord]);

  let visited = new Set();
  visited.add(beginWord);

  let res = [];
  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {

      let curPath = queue.shift();
      let curWord = curPath[curPath.length - 1];

      let charArray = curWord.split('');
      for (let j = 0; j < curWord.length; j++) {
        let originChar = charArray[j];

        for (let k = 'a'.charCodeAt(); k <= 'z'.charCodeAt(); k++) {
          if (String.fromCharCode(k) == originChar) {
            continue;
          }

          charArray[j] = String.fromCharCode(k);
          let nextWord = charArray.join('');

          if (wordSet.has(nextWord)) {
            let newPath = [...curPath];
            newPath.push(nextWord);
            visited.add(nextWord);
            if (nextWord == endWord) {
              res.push(newPath);
            } else {
              queue.push(newPath);
            }
          }
        }
        charArray[j] = originChar;
      }
    }

    for (let key of visited) {
      wordSet.delete(key);
    }
  }
  return res;
};