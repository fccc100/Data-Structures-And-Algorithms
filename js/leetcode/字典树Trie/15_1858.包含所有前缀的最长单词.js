// 1858. 包含所有前缀的最长单词
// 给定一个字符串数组 words，找出 words 中所有的前缀都在 words 中的最长字符串。

// 例如，令 words = ["a", "app", "ap"]。字符串 "app" 含前缀 "ap" 和 "a" ，都在 words 中。
// 返回符合上述要求的字符串。如果存在多个（符合条件的）相同长度的字符串，返回字典序中最小的字符串，如果这样的字符串不存在，返回 ""。

// 示例 1:

// 输入： words = ["k","ki","kir","kira", "kiran"]
// 输出： "kiran"
// 解释： "kiran" 含前缀 "kira"、 "kir"、 "ki"、 和 "k"，这些前缀都出现在 words 中。
// 示例 2:

// 输入： words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// 输出： "apple"
// 解释： "apple" 和 "apply" 都在 words 中含有各自的所有前缀。
// 然而，"apple" 在字典序中更小，所以我们返回之。
// 示例 3:

// 输入： words = ["abc", "bc", "ab", "qwe"]
// 输出： ""

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
    if (trie.check(words[i])) {
      if (words[i].length > res.length) {
        res = words[i];
      } else if (words[i].length == res.length) {
        res = res < words[i] ? res : words[i];
      }
    }
  }
  return res;
};

class Node {
  constructor() {
    this.next = new Map();
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node;
    this.size = 0;
  }

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

  check(word) {
    let cur = this.root;

    for (let i = 0; i < word.length; i++) {
      cur = cur.next.get(word[i]);
      if (!cur.isWord) {
        return false;
      }
    }
    return cur.isWord;
  }
}