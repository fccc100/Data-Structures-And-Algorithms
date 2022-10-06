// 323. 无向图中连通分量的数目
// 你有一个包含 n 个节点的图。给定一个整数 n 和一个数组 edges ，其中 edges[i] = [ai, bi] 表示图中 ai 和 bi 之间有一条边。

// 返回 图中已连接分量的数目 。

// 示例 1:

// 输入: n = 5, edges = [[0, 1], [1, 2], [3, 4]]
// 输出: 2
// 示例 2:

// 输入: n = 5, edges = [[0,1], [1,2], [2,3], [3,4]]
// 输出:  1

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

// 并查集
var countComponents = function (n, edges) {
  let uf = new UnionFind(n);

  for (let i = 0; i < edges.length; i++) {
    uf.union(edges[i][0], edges[i][1]);
  }
  return uf.connectComponent()
};

class UnionFind {
  constructor(size) {
    this.parent = new Array(size);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  size() {
    return this.parent.length;
  }

  connectComponent() {
    let res = 0;
    for (let i = 0; i < this.parent.length; i++) {
      if (this.parent[i] == i) {
        res++;
      }
    }
    return res;
  }

  find(p) {
    while (p != this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }

  isConnected(p, q) {
    return this.find(p) == this.find(q);
  }

  union(p, q) {
    let pRoot = this.find(p);
    let qRoot = this.find(q);
    if (pRoot == qRoot) {
      return;
    }

    this.parent[pRoot] = qRoot;
  }
}