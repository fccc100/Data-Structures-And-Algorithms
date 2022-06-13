// 面试题 17.15. 最长单词
// 给定一组单词words，编写一个程序，找出其中的最长单词，且该单词由这组单词中的其他单词组合而成。若有多个长度相同的结果，返回其中字典序最小的一项，若没有符合要求的单词则返回空字符串。

// 示例：

// 输入： ["cat","banana","dog","nana","walk","walker","dogwalker"]
// 输出： "dogwalker"
// 解释： "dogwalker"可由"dog"和"walker"组成。

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
    if (trie.search(false, words[i], trie)) {
      console.log(words[i])
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
  search(flag, word, trie) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.has(word[i])) {
        return false;
      }

      if (cur.next.get(word[i]).isWord && trie.search(true, word.substring(i + 1, word.length), trie)) {

        return true;
      }

      cur = cur.next.get(word[i]);
    }
    return flag && !!cur.isWord;
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