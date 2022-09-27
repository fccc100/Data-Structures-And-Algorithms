// 剑指 Offer II 108. 单词演变
// 在字典（单词列表） wordList 中，从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列：

// 序列中第一个单词是 beginWord 。
// 序列中最后一个单词是 endWord 。
// 每次转换只能改变一个字母。
// 转换过程中的中间单词必须是字典 wordList 中的单词。
// 给定两个长度相同但内容不同的单词 beginWord 和 endWord 和一个字典 wordList ，找到从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0。

// 示例 1：

// 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// 输出：5
// 解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
// 示例 2：

// 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// 输出：0
// 解释：endWord "cog" 不在字典中，所以无法进行转换。

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  let wordSet = new Set();
  for (let i = 0; i < wordList.length; i++) {
    wordSet.add(wordList[i]);
  }

  if (wordSet.size == 0 || !wordSet.has(endWord)) {
    return 0;
  }

  // BFS
  let queue = [];
  queue.push(beginWord);

  let visited = new Set();
  visited.add(beginWord);

  let res = 1;
  while(queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curWord = queue.shift();

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
            if (nextWord == endWord) {
              return res + 1;
            }

            if (!visited.has(nextWord)) {
              queue.push(nextWord);
              visited.add(nextWord);
            }
          }
        }

        charArray[j] = originChar;
      }
    }

    res ++;
  }

  return 0;
};