// 1804. 实现 Trie （前缀树） II
// 前缀树（trie ，发音为 "try"）是一个树状的数据结构，用于高效地存储和检索一系列字符串的前缀。前缀树有许多应用，如自动补全和拼写检查。

// 实现前缀树 Trie 类：

// Trie() 初始化前缀树对象。
// void insert(String word) 将字符串 word 插入前缀树中。
// int countWordsEqualTo(String word) 返回前缀树中字符串 word 的实例个数。
// int countWordsStartingWith(String prefix) 返回前缀树中以 prefix 为前缀的字符串个数。
// void erase(String word) 从前缀树中移除字符串 word 。


// 示例 1:

// 输入
// ["Trie", "insert", "insert", "countWordsEqualTo", "countWordsStartingWith", "erase", "countWordsEqualTo", "countWordsStartingWith", "erase", "countWordsStartingWith"]
// [[], ["apple"], ["apple"], ["apple"], ["app"], ["apple"], ["apple"], ["app"], ["apple"], ["app"]]
// 输出
// [null, null, null, 2, 2, null, 1, 1, null, 0]

// 解释
// Trie trie = new Trie();
// trie.insert("apple");               // 插入 "apple"。
// trie.insert("apple");               // 插入另一个 "apple"。
// trie.countWordsEqualTo("apple");    // 有两个 "apple" 实例，所以返回 2。
// trie.countWordsStartingWith("app"); // "app" 是 "apple" 的前缀，所以返回 2。
// trie.erase("apple");                // 移除一个 "apple"。
// trie.countWordsEqualTo("apple");    // 现在只有一个 "apple" 实例，所以返回 1。
// trie.countWordsStartingWith("app"); // 返回 1
// trie.erase("apple");                // 移除 "apple"。现在前缀树是空的。
// trie.countWordsStartingWith("app"); // 返回 0

class Node {
  constructor(isWord) {
    this.next = new Map();
    this.isWord = isWord || false;
    this.count = 0;
    this.prefixCount = 0;
  }
}

var Trie = function () {
  this.root = new Node();
  this.size = 0;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!cur.next.has(word[i])) {
      cur.next.set(word[i], new Node());
    }
    cur = cur.next.get(word[i]);
    cur.prefixCount ++;
  }
  if (!cur.isWord) {
    cur.isWord = true;
    this.size ++;
  }
  cur.count ++;
};

/** 
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function (word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!cur.next.has(word[i])) {
      return 0;
    } else {
      cur = cur.next.get(word[i]);
    }
  }
  return cur.count;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function (prefix) {
  let cur = this.root;
  for (let i = 0; i < prefix.length; i++) {
    if (!cur.next.has(prefix[i])) {
      return 0;
    } else {
      cur = cur.next.get(prefix[i]);
    }
  }

  return cur.prefixCount;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function (word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    cur = cur.next.get(word[i]);
    cur.prefixCount--;
  }
  cur.count --;
  if (cur.count == 0) {
    cur.isWord = false;
  }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */