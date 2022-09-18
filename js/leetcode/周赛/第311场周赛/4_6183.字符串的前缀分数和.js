// 6183. 字符串的前缀分数和
// 给你一个长度为 n 的数组 words ，该数组由 非空 字符串组成。

// 定义字符串 word 的 分数 等于以 word 作为 前缀 的 words[i] 的数目。

// 例如，如果 words = ["a", "ab", "abc", "cab"] ，那么 "ab" 的分数是 2 ，因为 "ab" 是 "ab" 和 "abc" 的一个前缀。
// 返回一个长度为 n 的数组 answer ，其中 answer[i] 是 words[i] 的每个非空前缀的分数 总和 。

// 注意：字符串视作它自身的一个前缀。

// 示例 1：

// 输入：words = ["abc","ab","bc","b"]
// 输出：[5,4,3,2]
// 解释：对应每个字符串的答案如下：
// - "abc" 有 3 个前缀："a"、"ab" 和 "abc" 。
// - 2 个字符串的前缀为 "a" ，2 个字符串的前缀为 "ab" ，1 个字符串的前缀为 "abc" 。
// 总计 answer[0] = 2 + 2 + 1 = 5 。
// - "ab" 有 2 个前缀："a" 和 "ab" 。
// - 2 个字符串的前缀为 "a" ，2 个字符串的前缀为 "ab" 。
// 总计 answer[1] = 2 + 2 = 4 。
// - "bc" 有 2 个前缀："b" 和 "bc" 。
// - 2 个字符串的前缀为 "b" ，1 个字符串的前缀为 "bc" 。 
// 总计 answer[2] = 2 + 1 = 3 。
// - "b" 有 1 个前缀："b"。
// - 2 个字符串的前缀为 "b" 。
// 总计 answer[3] = 2 。
// 示例 2：

// 输入：words = ["abcd"]
// 输出：[4]
// 解释：
// "abcd" 有 4 个前缀 "a"、"ab"、"abc" 和 "abcd"。
// 每个前缀的分数都是 1 ，总计 answer[0] = 1 + 1 + 1 + 1 = 4 。

/**
* @param {string[]} words
* @return {number[]}
*/
var sumPrefixScores = function (words) {
  let trie = new Trie();
  for (let i = 0; i < words.length; i++) {
    trie.add(words[i]);
  }

  let res = Array(words.length);
  for (let i = 0; i < words.length; i++) {
    res[i] = trie.countWordsStartingWith(words[i]);
  }

  return res;
};


class Node {
  constructor(isWord) {
    this.next = new Map();
    this.isWord = isWord || false;
    this.prefixCount = 0;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
    this.size = 0;
  }

  add(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.has(word[i])) {
        cur.next.set(word[i], new Node());
      }
      cur = cur.next.get(word[i]);

      // 以当前字符作为前缀的单词数 + 1
      cur.prefixCount++;
    }
    if (!cur.isWord) {
      cur.isWord = true;
      this.size++;
    }
  }

  countWordsStartingWith(prefix) {
    let cur = this.root;

    let res = 0;
    for (let i = 0; i < prefix.length; i++) {
      if (!cur.next.has(prefix[i])) {
        return res;
      } else {
        cur = cur.next.get(prefix[i]);
        res += cur.prefixCount;
      }
    }
    return res;
  }
}
