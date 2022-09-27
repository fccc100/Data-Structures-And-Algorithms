// 1268. 搜索推荐系统
// 给你一个产品数组 products 和一个字符串 searchWord ，products  数组中每个产品都是一个字符串。

// 请你设计一个推荐系统，在依次输入单词 searchWord 的每一个字母后，推荐 products 数组中前缀与 searchWord 相同的最多三个产品。如果前缀相同的可推荐产品超过三个，请按字典序返回最小的三个。

// 请你以二维列表的形式，返回在输入 searchWord 每个字母后相应的推荐产品的列表。

// 示例 1：

// 输入：products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// 输出：[
// ["mobile","moneypot","monitor"],
// ["mobile","moneypot","monitor"],
// ["mouse","mousepad"],
// ["mouse","mousepad"],
// ["mouse","mousepad"]
// ]
// 解释：按字典序排序后的产品列表是 ["mobile","moneypot","monitor","mouse","mousepad"]
// 输入 m 和 mo，由于所有产品的前缀都相同，所以系统返回字典序最小的三个产品 ["mobile","moneypot","monitor"]
// 输入 mou， mous 和 mouse 后系统都返回 ["mouse","mousepad"]
// 示例 2：

// 输入：products = ["havana"], searchWord = "havana"
// 输出：[["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
// 示例 3：

// 输入：products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
// 输出：[["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
// 示例 4：

// 输入：products = ["havana"], searchWord = "tatiana"
// 输出：[[],[],[],[],[],[],[]]

// 1.根据searchWord的每个前缀在字典树中查询，性能慢，勉强通过 (5%)
class TrieNode {
  constructor() {
    this.isWord = false;
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

  search(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.get(word[i])) {
        return [];
      }
      cur = cur.next.get(word[i]);
    }
    return this.__search(cur, word, []);
  }

  __search(node, word, path) {
    if (node.isWord) {
      path.push(word);
    }
    for (let entry of node.next) {
      word = word + entry[0];
      this.__search(entry[1], word, path);
      word = word.slice(0, word.length - 1);
    }
    return path;
  }
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  let trie = new Trie();
  for (let i = 0; i < products.length; i++) {
    trie.add(products[i]);
  }

  let res = [];
  // 根据每个前缀查询结果
  for (let i = 0; i < searchWord.length; i++) {
    let cur = trie.search(searchWord.slice(0, i + 1));
    res.push(cur);
  }

  // 排序，截取前三个
  for (let i = 0; i < res.length; i++) {
    res[i].sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a == b) {
        return 0;
      } else {
        return 1;
      }
    })
    if (res[i].length > 3) {
      res[i] = res[i].slice(0, 3);
    }
  }
  return res;
};

// 2.搜索时只取前三个，并按字典序遍历，性能没有多大提升
class TrieNode {
  constructor() {
    this.isWord = false;
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

  search(word) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.get(word[i])) {
        return [];
      }
      cur = cur.next.get(word[i]);
    }
    return this.__search(cur, word, []);
  }

  __search(node, word, path) {
    if (path.length == 3) {
      return path;
    }
    if (node.isWord) {
      path.push(word);
    }

    for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
      let c = String.fromCharCode(i);
      if (node.next.has(c)) {
        word = word + c;
        this.__search(node.next.get(c), word, path);
        word = word.slice(0, word.length - 1);
      }
    }

    return path;
  }
}

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  let trie = new Trie();
  for (let i = 0; i < products.length; i++) {
    trie.add(products[i]);
  }

  let res = [];
  // 根据每个前缀查询结果
  for (let i = 0; i < searchWord.length; i++) {
    let cur = trie.search(searchWord.slice(0, i + 1));
    res.push(cur);
  }

  return res;
};