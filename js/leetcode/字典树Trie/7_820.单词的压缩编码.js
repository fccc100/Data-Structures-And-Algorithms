// 820. 单词的压缩编码
// 单词数组 words 的 有效编码 由任意助记字符串 s 和下标数组 indices 组成，且满足：

// words.length == indices.length
// 助记字符串 s 以 '#' 字符结尾
// 对于每个下标 indices[i] ，s 的一个从 indices[i] 开始、到下一个 '#' 字符结束（但不包括 '#'）的 子字符串 恰好与 words[i] 相等
// 给你一个单词数组 words ，返回成功对 words 进行编码的最小助记字符串 s 的长度 。

// 示例 1：

// 输入：words = ["time", "me", "bell"]
// 输出：10
// 解释：一组有效编码为 s = "time#bell#" 和 indices = [0, 2, 5] 。
// words[0] = "time" ，s 开始于 indices[0] = 0 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
// words[1] = "me" ，s 开始于 indices[1] = 2 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
// words[2] = "bell" ，s 开始于 indices[2] = 5 到下一个 '#' 结束的子字符串，如加粗部分所示 "time#bell#"
// 示例 2：

// 输入：words = ["t"]
// 输出：2
// 解释：一组有效编码为 s = "t#" 和 indices = [0] 。

// 字典树
class Node {
  constructor(isWord = false) {
    this.isWord = isWord;
    this.next = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
    this.len = 0;
  }

  getLen() {
    return this.len;
  }

  add(word) {
    let cur = this.root;
    let len = 0;
    let res = 0;
    let isPrefix = this.prefix(word);

    // 倒序添加,同时记录经过的路径上有多少单词, 这些单词在之前的添加中都计算了len,需要减掉
    for (let i = word.length - 1; i >= 0; i--) {
      if (!cur.next.has(word[i])) {
        cur.next.set(word[i], new Node());
      }
      cur = cur.next.get(word[i]);
      len++;
      // 发现路径上的单词,需要减掉对应的长度, 同时下次再遇见这个单词的话不要再减了,把isWord变为false
      if (cur.isWord) {
        cur.isWord = false;
        res += len + 1;
      }
    }

    // 如果这个单词不是其他单词的前缀,更新长度
    if (!cur.isWord && !isPrefix) {
      this.len = this.len + len - res + 1;
    }
    if (!isPrefix) {
      cur.isWord = true;
    }
  }

  // 判断word是否是某个单词的前缀
  prefix(word) {
    let cur = this.root;
    for (let i = word.length - 1; i >= 0; i--) {
      if (!cur.next.has(word[i])) {
        return false;
      }
      cur = cur.next.get(word[i]);
    }
    return true;
  }
}

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  let trie = new Trie();

  // 把每个字符依次加入字典树
  for (let i = 0; i < words.length; i++) {
    trie.add(words[i]);
  }

  return trie.getLen();
};