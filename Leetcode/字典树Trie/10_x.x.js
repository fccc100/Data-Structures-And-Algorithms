// 336. 回文对
// 给定一组 互不相同 的单词， 找出所有 不同 的索引对 (i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。

// 示例 1：

// 输入：words = ["abcd","dcba","lls","s","sssll"]
// 输出：[[0,1],[1,0],[3,2],[2,4]] 
// 解释：可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]
// 示例 2：

// 输入：words = ["bat","tab","cat"]
// 输出：[[0,1],[1,0]] 
// 解释：可拼接成的回文串为 ["battab","tabbat"]
// 示例 3：

// 输入：words = ["a",""]
// 输出：[[0,1],[1,0]]


/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i != j) {

        let isPrefix = true;
        
        let l = 0;
        let r = words[j].length - 1;
        while(l < words[i].length && r >= 0) {
          if (words[i][l] != words[j][r]) {
            isPrefix = false;
          }
          l++;
          r--;
        }

        if (r >= 0) {
          let cur = words[j][r];
          for (let k = r - 1; k >= 0; k--) {
            if (words[j][k] != cur) {
              isPrefix = false;
            }
          }
        }
        if (l < words[i].length) {
          isPrefix = false;
        }

        if (isPrefix) {
          res.push([i, j])
        }
      }
    }
  }
  return res;
}


// 字典树
class TrieNode {
  constructor(isWord = false) {
    this.isWord = isWord;
    this.next = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  add(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.has(word[i])) {
        cur.next.set(word[i], new TrieNode());
      }
      cur = cur.next.get(word[i]);
    }
    cur.isWord = true;
  }

  isPrefix(prefix) {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!cur.next.has(prefix[i])) {
        return false;
      }
      cur = cur.next.get(prefix[i]);
    }

    let remainStr = '';
    while (cur) {

    }
    return true;
  }
}

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  let trie = new Trie();
  for (let i = 0; i < words.length; i++) {
    trie.add(words[i]);
  }

  for (let i = 0; i < words.length; i++) {
    let curWord = words[i].split('').reverse().join('');
    if (trie.isPrefix(curWord)) {

    }
  }
};