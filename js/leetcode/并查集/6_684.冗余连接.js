// 684. 冗余连接
// 树可以看成是一个连通且 无环 的 无向 图。

// 给定往一棵 n 个节点 (节点值 1～n) 的树中添加一条边后的图。添加的边的两个顶点包含在 1 到 n 中间，且这条附加的边不属于树中已存在的边。
// 图的信息记录于长度为 n 的二维数组 edges ，edges[i] = [ai, bi] 表示图中在 ai 和 bi 之间存在一条边。

// 请找出一条可以删去的边，删除后可使得剩余部分是一个有着 n 个节点的树。如果有多个答案，则返回数组 edges 中最后出现的边。

// 示例 1：

// 输入: edges = [[1,2], [1,3], [2,3]]
// 输出: [2,3]
// 示例 2：

// 输入: edges = [[1,2], [2,3], [3,4], [1,4], [1,5]]
// 输出: [1,4]

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  let uf = new UnionFind(edges.length);

  for (let i = 0; i < edges.length; i++) {
    if (uf.findRoot(edges[i][0]) == uf.findRoot(edges[i][1])) {
      uf.union(edges[i][0], edges[i][1]);
    } else {
      return edges[i];
    }
  }
};

class UnionFind {
  constructor(size) {
    this.parent = Array(size);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  size() {
    return this.parent.length;
  }

  findRoot(p) {
    while(this.parent[p] != p) {
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

    if (pRoot != qRoot) {
      this.parent[pRoot] = qRoot;
    }
  }
}

// 20220801
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
}
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  let n = edges.length;
  let uf = new UnionFind(edges.length);
  for (let i = 0; i < n; i++) {
    if (uf.isConnected(edges[i][0], edges[i][1])) {
      return edges[i];
    }
    uf.union(edges[i][0], edges[i][1]);
  }
  return [-1, -1];
};