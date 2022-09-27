// 745. 前缀和后缀搜索
// 设计一个包含一些单词的特殊词典，并能够通过前缀和后缀来检索单词。

// 实现 WordFilter 类：

// WordFilter(string[] words) 使用词典中的单词 words 初始化对象。
// f(string pref, string suff) 返回词典中具有前缀 prefix 和后缀 suff 的单词的下标。如果存在不止一个满足要求的下标，返回其中 最大的下标 。如果不存在这样的单词，返回 -1 。

// 示例：

// 输入
// ["WordFilter", "f"]
// [[["apple"]], ["a", "e"]]
// 输出
// [null, 0]
// 解释
// WordFilter wordFilter = new WordFilter(["apple"]);
// wordFilter.f("a", "e"); // 返回 0 ，因为下标为 0 的单词：前缀 prefix = "a" 且 后缀 suff = "e" 。


/**
 * @param {string[]} words
 */
// 哈希表记录前缀 + 后缀，暴力求解，勉强通过
var WordFilter = function (words) {
  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      for (let k = words[i].length - 1; k >= 0; k--) {
        let prefixAndSuff = words[i].substring(0, j + 1) + '-' + words[i].substring(k, words[i].length);

        map.set(prefixAndSuff, i);
      }
    }
  }

  this.map = map;
};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
  let prefixAndSuff = pref + '-' + suff;
  if (this.map.has(prefixAndSuff)) {
    return this.map.get(prefixAndSuff);
  }
  return -1;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */


// 2.
// ["WordFilter","f"]
// [[["abbba","abba"]],["ab","ba"]]


// 2.超时
/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  this.words = words;
};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
  let res = -1;
  for (let i = 0; i < this.words.length; i++) {
    if (this.isPrefixAndSuff(this.words[i], pref, suff)) {
      res = i;
    }
  }
  return res;
};

WordFilter.prototype.isPrefixAndSuff = function (word, pref, suff) {
  if (pref.length > word.length || suff.length > word.length) {
    return false;
  }
  let i = 0;
  let j = 0;
  while (j < pref.length) {
    if (word[i] == pref[j]) {
      i++;
      j++;
    } else {
      return false;
    }
  }

  let m = word.length - 1;
  let n = suff.length - 1;
  while (n >= 0) {
    if (word[m] == suff[n]) {
      m--;
      n--;
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */

// 3.前缀树，待解
class TrieNode {
  constructor(isWord = false) {
    this.isWord = isWord;
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

  isPrefixAndSuff(prefix, suff) {
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

/**
 * @param {string[]} words
 */
var WordFilter = function (words) {

};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {

};