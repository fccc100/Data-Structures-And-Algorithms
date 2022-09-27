// 剑指 Offer II 066. 单词之和
// 实现一个 MapSum 类，支持两个方法，insert 和 sum：

// MapSum() 初始化 MapSum 对象
// void insert(String key, int val) 插入 key-val 键值对，字符串表示键 key ，整数表示值 val 。如果键 key 已经存在，那么原来的键值对将被替代成新的键值对。
// int sum(string prefix) 返回所有以该前缀 prefix 开头的键 key 的值的总和。

// 示例：

// 输入：
// inputs = ["MapSum", "insert", "sum", "insert", "sum"]
// inputs = [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
// 输出：
// [null, null, 3, null, 5]

// 解释：
// MapSum mapSum = new MapSum();
// mapSum.insert("apple", 3);  
// mapSum.sum("ap");           // return 3 (apple = 3)
// mapSum.insert("app", 2);    
// mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)


class TrieNode {
  constructor() {
    this.val = 0;
    this.next = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.ans = 0;
  }

  insert(key, val) {
    let cur = this.root;
    for (let i = 0; i < key.length; i++) {
      if (!cur.next.has(key[i])) {
        cur.next.set(key[i], new TrieNode());
      }
      cur = cur.next.get(key[i]);
    }
    cur.val = val;
  }

  sum(prefix) {
    let cur = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!cur.next.get(prefix[i])) {
        return 0;
      }
      cur = cur.next.get(prefix[i]);
    }
    this.__sum(cur);
    let res = this.ans;
    this.ans = 0;
    return res;
  }

  __sum(node) {
    this.ans += node.val;

    for (let entry of node.next) {
      this.__sum(entry[1]);
    }
  }
}

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.trie = new Trie();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  this.trie.insert(key, val);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  return this.trie.sum(prefix);
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */