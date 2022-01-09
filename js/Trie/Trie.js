// 字典树
class Trie {
  constructor() {
    this.root = new Node();
    this.size = 0;
  }

  size() {
    return this.size;
  }

  // 向字典树中添加单词
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
      this.size ++;
    }
  }

  contains(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.get(word[i])) {
        return false;
      }
      cur = cur.next.get(word[i]);
    }
    return cur.isWord;
  }

  isPrefix(prefix) {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!cur.next.has(prefix[i])) {
        return false;
      }
      cur = cur.next.get(prefix[i]);
    }
    return true;
  }
}

// 字典树中每个节点对应的类
class Node {
  constructor(isWord = false) {
    this.isWord = isWord;
    this.next = new Map();
  }
}