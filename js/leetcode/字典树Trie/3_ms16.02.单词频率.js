// 面试题 16.02. 单词频率
// 设计一个方法，找出任意指定单词在一本书中的出现频率。

// 你的实现应该支持如下操作：

// WordsFrequency(book)构造函数，参数为字符串数组构成的一本书
// get(word)查询指定单词在书中出现的频率
// 示例：

// WordsFrequency wordsFrequency = new WordsFrequency({"i", "have", "an", "apple", "he", "have", "a", "pen"});
// wordsFrequency.get("you"); //返回0，"you"没有出现过
// wordsFrequency.get("have"); //返回2，"have"出现2次
// wordsFrequency.get("an"); //返回1
// wordsFrequency.get("apple"); //返回1
// wordsFrequency.get("pen"); //返回1

/**
 * @param {string[]} book
 */
// 字典树
var WordsFrequency = function (book) {
  this.trie = new Trie();
  for (let i = 0; i < book.length; i++) {
    this.trie.add(book[i]);
  }
};

/** 
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function (word) {
  return this.trie.search(word)
};

class Node {
  constructor(isWord) {
    this.isWord = isWord;
    this.next = new Map();
    this.count = 0;
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
    cur.count++;
  }

  // 查询是否存在单词
  search(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.has(word[i])) {
        return 0;
      } else {
        cur = cur.next.get(word[i]);
      }
    }
    return cur.count;
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

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */


// map
/**
 * @param {string[]} book
 */
var WordsFrequency = function (book) {
  this.map = new Map();
  for (let i = 0; i < book.length; i++) {
    if (this.map.has(book[i])) {
      this.map.set(book[i], this.map.get(book[i]) + 1)
    } else {
      this.map.set(book[i], 1)
    }
  }
};

/** 
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function (word) {
  return this.map.has(word) ? this.map.get(word) : 0;
};


/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */