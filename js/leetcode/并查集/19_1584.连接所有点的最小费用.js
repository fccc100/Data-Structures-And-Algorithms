// 1584. 连接所有点的最小费用
// 给你一个points 数组，表示 2D 平面上的一些点，其中 points[i] = [xi, yi] 。

// 连接点 [xi, yi] 和点 [xj, yj] 的费用为它们之间的 曼哈顿距离 ：|xi - xj| + |yi - yj| ，其中 |val| 表示 val 的绝对值。

// 请你返回将所有点连接的最小总费用。只有任意两点之间 有且仅有 一条简单路径时，才认为所有点都已连接。

// 示例 1：

// 输入：points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// 输出：20
// 解释：

// 我们可以按照上图所示连接所有点得到最小总费用，总费用为 20 。
// 注意到任意两个点之间只有唯一一条路径互相到达。
// 示例 2：

// 输入：points = [[3,12],[-2,5],[-4,1]]
// 输出：18
// 示例 3：

// 输入：points = [[0,0],[1,1],[1,0],[-1,1]]
// 输出：4
// 示例 4：

// 输入：points = [[-1000000,-1000000],[1000000,1000000]]
// 输出：4000000
// 示例 5：

// 输入：points = [[0,0]]
// 输出：0

class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    this.sz = Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.sz[i] = 1;
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

    // 基于size优化
    if (this.sz[pRoot] < this.sz[qRoot]) {
      this.parent[pRoot] = qRoot;
      this.sz[qRoot] += this.sz[pRoot];
    } else {
      this.parent[qRoot] = pRoot;
      this.sz[pRoot] += this.sz[qRoot];
    }
  }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  let n = points.length;

  // 算出每两个点直接的边及费用，之后使用Kruskal算法求最小生成树
  let edges = Array(n * (n - 1) / 2);

  let index = 0;
  for (let i = 0; i < n; i++) {
    
    for (let j = i + 1; j < n; j++) {
      let dis = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
      edges[index] = [i, j, dis]
      index ++;
    }
  }

  edges.sort((a, b) => a[2] - b[2]);

  let uf = new UnionFind(edges.length);
  let res = 0;
  for (let i = 0; i < edges.length; i++) {
    if (!uf.isConnected(edges[i][0], edges[i][1])) {
      res += edges[i][2];
      uf.union(edges[i][0], edges[i][1]);
    }
  }
  return res;
};