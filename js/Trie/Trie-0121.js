class Trie {
  constructor() {
    this.root = new Node();
  }

  add(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.has(word[i])) {
        cur.next.set(word[i], new Node());
      }
      cur = cur.next.get(word[i]);
    }
    cur.isWord = true;
  }

  contains(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.has(word[i])) {
        return false;
      }
      cur = cur.next.get(word[i]);
    }
    return cur.isWord;
  }

  isPrefix(prefix) {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!cur.next.has(word[i])) {
        return false;
      }
      cur = cur.next.get(word[i]);
    }
    return true;
  }
}

class Node {
  constructor() {
    this.next = new Map();
    this.isWord = false;
  }
}