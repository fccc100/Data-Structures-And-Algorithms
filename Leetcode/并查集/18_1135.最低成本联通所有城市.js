// 1135. 最低成本联通所有城市
// 想象一下你是个城市基建规划者，地图上有 n 座城市，它们按以 1 到 n 的次序编号。

// 给你整数 n 和一个数组 conections，其中 connections[i] = [xi, yi, costi] 表示将城市 xi 和城市 yi 连接所要的costi（连接是双向的）。

// 返回连接所有城市的最低成本，每对城市之间至少有一条路径。如果无法连接所有 n 个城市，返回 -1

// 该 最小成本 应该是所用全部连接成本的总和。

// 示例 1：

// 输入：n = 3, conections = [[1,2,5],[1,3,6],[2,3,1]]
// 输出：6
// 解释：选出任意 2 条边都可以连接所有城市，我们从中选取成本最小的 2 条。
// 示例 2：

// 输入：n = 4, conections = [[1,2,3],[3,4,4]]
// 输出：-1
// 解释：即使连通所有的边，也无法连接所有城市。

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

  getConnectedComponent() {
    let res = 0;
    for (let i = 1; i < this.parent.length; i++) {
      if (this.parent[i] == i) {
        res++;
      }
    }
    return res;
  }
}
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
// Kruskal算法
var minimumCost = function(n, connections) {
  let uf = new UnionFind(n + 1);
  // 权重从小到大排序
  connections.sort((a, b) => a[2] - b[2]);
  let res = 0;

  // 如果加入当前边不会形成环则加入
  for (let i = 0; i < connections.length; i++) {
    if (!uf.isConnected(connections[i][0], connections[i][1])) {
      res += connections[i][2];
      uf.union(connections[i][0], connections[i][1]);
    }
  }

  // 只有一个连通分量
  return uf.getConnectedComponent() == 1 ? res : -1;
};