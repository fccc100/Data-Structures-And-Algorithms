// 127. 单词接龙
// 字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列 beginWord -> s1 -> s2 -> ... -> sk：

// 每一对相邻的单词只差一个字母。
//  对于 1 <= i <= k 时，每个 si 都在 wordList 中。注意， beginWord 不需要在 wordList 中。
// sk == endWord
// 给你两个单词 beginWord 和 endWord 和一个字典 wordList ，返回 从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0 。

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
var ladderLength = function (beginWord, endWord, wordList) {
  // 先把所有单词放入哈希表中
  let wordSet = new Set();
  for (let i = 0; i < wordList.length; i++) {
    wordSet.add(wordList[i]);
  }

  // 如果不存在结束单词，不能转换，返回0
  if (wordSet.size == 0 || !wordSet.has(endWord)) {
    return 0;
  }

  // BFS
  let queue = [];
  queue.push(beginWord);

  // 记录已经遍历过的节点
  let visited = new Set();
  visited.add(beginWord);

  let res = 1;
  while (queue.length) {

    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let curWord = queue.shift();
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
            // 找到结尾单词，返回路径 + 1；
            if (nextWord == endWord) {
              return res + 1;
            }

            // 新找到的单词还没遍历过，入队
            if (!visited.has(nextWord)) {
              queue.push(nextWord);
              visited.add(nextWord);
            }
          }
        }
        // 这里最后搞完一个字符要把它还原成原来的字符，在换其他字符的时候才不会出问题
        charArray[j] = originChar;
      }
    }

    // 每遍历一次，路径 + 1。
    res++;
  }

  return 0;
};