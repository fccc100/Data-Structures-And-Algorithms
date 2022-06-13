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
      if (!cur.next.has(word[i])) {
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

// 递归
class Trie {
  constructor() {
    this.root = new Node();
    this.size = 0;
  }

  // 添加单词
  add(word) {
    this.__add(this.root, word, 0);
  }

  __add(node, word, index) {
    if (node.) {
      return;
    }


  }

  // 查询是否存在单词
  search(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.has(word[i])) {
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