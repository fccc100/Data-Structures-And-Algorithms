// 386. 字典序排数
// 给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。
// 你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。

// 示例 1：

// 输入：n = 13
// 输出：[1,10,11,12,13,2,3,4,5,6,7,8,9]

function lexicalOrder(n) {

}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(num) {
    let cur = this.root;
    for (let i = 0; i <= num; i++) {
      if (!cur.next.has(i)) {
        cur.next.set(i, new Node());
      }
      cur = cur.next;
    }
  }
}

class Node {
  constructor() {
    this.next = new Map();
  }
}