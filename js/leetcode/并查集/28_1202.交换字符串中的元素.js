// 1202. 交换字符串中的元素
// 给你一个字符串 s，以及该字符串中的一些「索引对」数组 pairs，其中 pairs[i] = [a, b] 表示字符串中的两个索引（编号从 0 开始）。

// 你可以 任意多次交换 在 pairs 中任意一对索引处的字符。

// 返回在经过若干次交换后，s 可以变成的按字典序最小的字符串。

// 示例 1:

// 输入：s = "dcab", pairs = [[0,3],[1,2]]
// 输出："bacd"
// 解释： 
// 交换 s[0] 和 s[3], s = "bcad"
// 交换 s[1] 和 s[2], s = "bacd"
// 示例 2：

// 输入：s = "dcab", pairs = [[0,3],[1,2],[0,2]]
// 输出："abcd"
// 解释：
// 交换 s[0] 和 s[3], s = "bcad"
// 交换 s[0] 和 s[2], s = "acbd"
// 交换 s[1] 和 s[2], s = "abcd"
// 示例 3：

// 输入：s = "cba", pairs = [[0,1],[1,2]]
// 输出："abc"
// 解释：
// 交换 s[0] 和 s[1], s = "bca"
// 交换 s[1] 和 s[2], s = "bac"
// 交换 s[0] 和 s[1], s = "abc"

class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  findRoot(p) {
    while (p != this.parent[p]) {
      p = this.parent[p];    
    }
    return p;
  }

  isConnected(p, q) {
    return this.findRoot(p) == this.findRoot(q);
  }

  union(p, q) {
    let pRoot = this.findRoot(p);
    let qRoot = this.findRoot(q);
    if (pRoot == qRoot) {
      return;
    }
    this.parent[pRoot] = qRoot;
  }

  getGroup() {
    let map = new Map();
    for (let i = 0; i < this.parent.length; i++) {
      let root = this.findRoot(this.parent[i]);
      if (!map.has(root)) {
        map.set(root, []);
      }
      map.get(root).push(i);
    }

    return map;
  }
}

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
// 用并查集把可以互相交换的全部索引放在一个组中
// 每个组进行排序
// 遍历每个索引，找到它所在的组，用这个组中字典序最小的字母作为当前的字符
var smallestStringWithSwaps = function(s, pairs) {
  let uf = new UnionFind(s.length);
  for (let i = 0; i < pairs.length; i++) {
    if (!uf.isConnected(pairs[i][0], pairs[i][1])) {
      uf.union(pairs[i][0], pairs[i][1]);
    }
  }

  let groupMap = uf.getGroup();
  
  for (let entry of groupMap) {
    entry[1].sort((a, b) => {
      if (s[a] < s[b]) {
        return 1;
      } else if (s[a] > s[b]) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let root = uf.findRoot(i);
    let curArr = groupMap.get(root);
    res = res + s[curArr.pop()];
  }
  return res;
};

// 2.按秩合并优化后直接100%
class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    this.rank = Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 1;
    }
  }

  findRoot(p) {
    while (p != this.parent[p]) {
      p = this.parent[p];    
    }
    return p;
  }

  isConnected(p, q) {
    return this.findRoot(p) == this.findRoot(q);
  }

  // 基于rank优化的合并
  union(p, q) {
    let pRoot = this.findRoot(p);
    let qRoot = this.findRoot(q);
    if (pRoot == qRoot) {
      return;
    }
    // this.parent[pRoot] = qRoot;
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot;
    } else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot;
    } else {
      this.parent[pRoot] = qRoot;
      this.rank[qRoot] += 1;
    }
  }

  getGroup() {
    let map = new Map();
    for (let i = 0; i < this.parent.length; i++) {
      let root = this.findRoot(this.parent[i]);
      if (!map.has(root)) {
        map.set(root, []);
      }
      map.get(root).push(i);
    }

    return map;
  }
}

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  let uf = new UnionFind(s.length);
  for (let i = 0; i < pairs.length; i++) {
    if (!uf.isConnected(pairs[i][0], pairs[i][1])) {
      uf.union(pairs[i][0], pairs[i][1]);
    }
  }

  let groupMap = uf.getGroup();
  
  for (let entry of groupMap) {
    entry[1].sort((a, b) => {
      if (s[a] < s[b]) {
        return 1;
      } else if (s[a] > s[b]) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let root = uf.findRoot(i);
    let curArr = groupMap.get(root);
    res = res + s[curArr.pop()];
  }
  return res;
};