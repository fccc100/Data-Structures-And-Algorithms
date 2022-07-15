// 677. 键值映射
// 设计一个 map ，满足以下几点:

// 字符串表示键，整数表示值
// 返回具有前缀等于给定字符串的键的值的总和
// 实现一个 MapSum 类：

// MapSum() 初始化 MapSum 对象
// void insert(String key, int val) 插入 key-val 键值对，字符串表示键 key ，整数表示值 val 。如果键 key 已经存在，那么原来的键值对 key-value 将被替代成新的键值对。
// int sum(string prefix) 返回所有以该前缀 prefix 开头的键 key 的值的总和。


// 示例 1：

// 输入：
// ["MapSum", "insert", "sum", "insert", "sum"]
// [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
// 输出：
// [null, null, 3, null, 5]

// 解释：
// MapSum mapSum = new MapSum();
// mapSum.insert("apple", 3);  
// mapSum.sum("ap");           // 返回 3 (apple = 3)
// mapSum.insert("app", 2);    
// mapSum.sum("ap");           // 返回 5 (apple + app = 3 + 2 = 5)

// 字典树
class TrieNode {
  constructor(val = 0) {
    this.isWord = false;
    this.val = val;
    this.next = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.sum_res = 0;
  }

  add(word, val) {
    let cur = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!cur.next.has(word[i])) {
        cur.next.set(word[i], new TrieNode());
      }
      cur = cur.next.get(word[i]);
    }

    cur.isWord = true;
    cur.val = val;
  }

  sum(prefix) {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!cur.next.has(prefix[i])) {
        return 0;
      }
      cur = cur.next.get(prefix[i]);
    }

    if (cur.isWord) {
      this.sum_res += cur.val;
    }
    this.__sum(cur);
    let res = this.sum_res;
    this.sum_res = 0;
    return res;
  }

  __sum(node) {
    for (let entry of node.next) {
      if (entry[1].isWord) {
        this.sum_res += entry[1].val;
      }
      this.__sum(entry[1]);
    }
  }
}

var MapSum = function () {
  this.trie = new Trie();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  this.trie.add(key, val);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {

  return this.trie.sum(prefix);
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */