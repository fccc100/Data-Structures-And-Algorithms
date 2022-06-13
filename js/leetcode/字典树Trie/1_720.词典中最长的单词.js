// 720. 词典中最长的单词
// 给出一个字符串数组 words 组成的一本英语词典。返回 words 中最长的一个单词，该单词是由 words 词典中其他单词逐步添加一个字母组成。

// 若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。



// 示例 1：

// 输入：words = ["w","wo","wor","worl", "world"]
// 输出："world"
// 解释： 单词"world"可由"w", "wo", "wor", 和 "worl"逐步添加一个字母组成。
// 示例 2：

// 输入：words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// 输出："apple"
// 解释："apply" 和 "apple" 都能由词典中的单词组成。但是 "apple" 的字典序小于 "apply" 

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  let trie = new Trie();
  for (let i = 0; i < words.length; i++) {
    trie.add(words[i]);
  }

  let res = '';
  for (let i = 0; i < words.length; i++) {
    if (trie.search(words[i])) {
      if (words[i].length > res.length || (words[i].length == res.length && words[i] < res)) {
        res = words[i];
      }
    }
  }
  return res;
};

class Node {
  constructor(isWord) {
    this.isWord = isWord;
    this.next = new Map();
  }
}

// 非递归
class Trie {
  constructor() {
    this.root = new Node();
    this.size = 0;
  }

  // 添加单词
  add(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.has(word[i])) {
        cur.next.set(word[i], new Node());
      }
      cur = cur.next.get(word[i]);
    }

    if (!cur.isWord) {
      cur.isWord = true;
      this.size++;
    }
  }

  // 查询是否存在单词
  search(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.has(word[i]) || !cur.next.get(word[i]).isWord) {
        return false;
      } else {
        cur = cur.next.get(word[i]);
      }
    }
    return !!cur.isWord;
  }

  // 查询是否有以prefix为前缀的单词
  startsWith(prefix) {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!cur.next.has(prefix[i])) {
        return false;
      } else {
        cur = cur.next.get(prefix[i]);
      }
    }
    return true;
  }
}