// 1102. 得分最高的路径
// 给定一个 m x n 的整数矩阵 grid，返回从 (0,0) 开始到 (m - 1, n - 1) 在四个基本方向上移动的路径的最大 分数 。

// 一条路径的 分数 是该路径上的最小值。

// 例如，路径 8 → 4 → 5 → 9 的得分为 4 。

// 示例 1：

// 输入：grid = [[5,4,5],[1,2,6],[7,4,6]]
// 输出：4
// 解释：得分最高的路径用黄色突出显示。 
// 示例 2：

// 输入：grid = [[2,2,1,2,2,2],[1,2,2,2,1,2]]
// 输出：2
// 示例 3：

// 输入：grid = [[3,4,6,3,4],[0,2,1,1,7],[8,8,3,2,7],[3,2,4,9,8],[4,1,2,0,0],[4,6,5,4,3]]
// 输出：3

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
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinimumPath = function (grid) {
  let m = grid.length;
  if (m == 0) {
    return 0;
  }
  let n = grid[0].length;

  let edges = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let curIndex = i * n + j;
      if (i + 1 < m) {
        let nextI = (i + 1) * n + j;
        edges.push([curIndex, nextI, Math.min(grid[i][j], grid[i + 1][j])]);
      }
      if (j + 1 < n) {
        let nextJ = i * n + j + 1;
        edges.push([curIndex, nextJ, Math.min(grid[i][j], grid[i][j + 1])]);
      }
    }
  }

  let uf = new UnionFind(m * n);
  edges.sort((a, b) => b[2] - a[2]);
  for (let i = 0; i < edges.length; i++) {
    if (!uf.isConnected(edges[i][0], edges[i][1])) {
      uf.union(edges[i][0], edges[i][1]);
    }
    if (uf.isConnected(0, m * n - 1)) {
      return edges[i][2];
    }
  }
  return 0;
};