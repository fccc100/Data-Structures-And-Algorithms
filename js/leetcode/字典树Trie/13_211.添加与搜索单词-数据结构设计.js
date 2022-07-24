// 211. 添加与搜索单词 - 数据结构设计
// 请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。

// 实现词典类 WordDictionary ：

// WordDictionary() 初始化词典对象
// void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
// bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回  false 。word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母。

// 示例：

// 输入：
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// 输出：
// [null,null,null,null,false,true,true,true]

// 解释：
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // 返回 False
// wordDictionary.search("bad"); // 返回 True
// wordDictionary.search(".ad"); // 返回 True
// wordDictionary.search("b.."); // 返回 True

class TrieNode {
  constructor() {
    this.next = new Map();
    this.isWord = false;
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


  search(word) {
    return this.match(this.root, word, 0);
  }

  match(node, word, index) {
    if (index == word.length) {
      return node.isWord;
    }

    let char = word[index];
    if (char != '.') {
      if (!node.next.has(char)) {
        return false;
      }
      return this.match(node.next.get(char), word, index + 1);
    } else {
      for (let entry of node.next) {
        if (this.match(entry[1], word, index + 1)) {
          return true;
        }
      }
      return false;
    }
  }
}

var WordDictionary = function () {
  this.trie = new Trie();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  this.trie.add(word);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.trie.search(word);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */