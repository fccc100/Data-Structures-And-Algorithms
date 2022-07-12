// 面试题 17.22. 单词转换
// 给定字典中的两个词，长度相等。写一个方法，把一个词转换成另一个词， 但是一次只能改变一个字符。每一步得到的新词都必须能在字典中找到。

// 编写一个程序，返回一个可能的转换序列。如有多个可能的转换序列，你可以返回任何一个。

// 示例 1:

// 输入:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// 输出:
// ["hit","hot","dot","lot","log","cog"]
// 示例 2:

// 输入:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// 输出: []

// 解释: endWord "cog" 不在字典中，所以不存在符合要求的转换序列。

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    // 先把所有单词放入哈希表中
  let wordSet = new Set();
  for (let i = 0; i < wordList.length; i++) {
    wordSet.add(wordList[i]);
  }

  // 如果不存在结束单词，不能转换，返回[]
  if (wordSet.size == 0 || !wordSet.has(endWord)) {
    return [];
  }

  // BFS, 需要记录具体的路径，队列中存放当前路径
  let queue = [];
  queue.push([beginWord]);

  // 记录已经遍历过的节点
  let visited = new Set();
  visited.add(beginWord);

  while (queue.length) {

    let len = queue.length;
    for (let i = 0; i < len; i++) {

      // 取出当前路径和当前单词
      let curPath = queue.shift();
      let curWord = curPath[curPath.length - 1];
      // 这里是遍历每一个单词，将其转为数组方便处理
      let charArray = curWord.split('');
      for (let j = 0; j < curWord.length; j++) {
        let originChar = charArray[j];

        // 这里把当前单词的每个字符尝试替换成a - z的任意字符
        for (let k = 'a'.charCodeAt(); k <= 'z'.charCodeAt(); k++) {
          if (String.fromCharCode(k) == originChar) {
            continue;
          }

          // 如果替换之后的单词在wordSet中存在，就BFS继续往下遍历
          charArray[j] = String.fromCharCode(k);
          let nextWord = charArray.join('');
          if (wordSet.has(nextWord)) {
            let newPath = [...curPath];
            newPath.push(nextWord);
            // 找到结尾单词，返回路径；
            if (nextWord == endWord) {
              return newPath;
            }

            // 新找到的单词还没遍历过，入队
            if (!visited.has(nextWord)) {
              queue.push(newPath);
              visited.add(nextWord);
            }
          }
        }
        // 这里最后搞完一个字符要把它还原成原来的字符，在换其他字符的时候才不会出问题
        charArray[j] = originChar;
      }
    }
  }

  return [];
};