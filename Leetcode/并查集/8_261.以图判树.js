// 261. 以图判树
// 给定编号从 0 到 n - 1 的 n 个结点。给定一个整数 n 和一个 edges 列表，其中 edges[i] = [ai, bi] 表示图中节点 ai 和 bi 之间存在一条无向边。

// 如果这些边能够形成一个合法有效的树结构，则返回 true ，否则返回 false 。

// 示例 1：

// 输入: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
// 输出: true
// 示例 2:

// 输入: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
// 输出: false

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
// 使用并查集
// 将edges加入并查集中
// 如果存在一条边的两个点在之前已经连通了，返回false
// 最后如果小于1个连通分量，返回true
var validTree = function(n, edges) {
  let uf = new UnionFind(n);
  for (let i = 0; i < edges.length; i++) {
    if (!uf.isConnected(edges[i][0], edges[i][1])) {
      uf.union(edges[i][0], edges[i][1]);
    } else {
      return false;
    }
  }
  return uf.connectedComponent() <= 1;;
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

  connectedComponent() {
    let res = 0;
    for (let i = 0; i < this.parent.length; i++) {
      if (this.parent[i] == i) {
        res++;
      }
    }
    return res;
  }

  find(p) {
    while(p != this.parent[p]) {
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