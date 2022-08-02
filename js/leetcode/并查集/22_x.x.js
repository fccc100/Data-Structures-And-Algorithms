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
 * @param {number[][]} grid
 * @return {number}
 */
// [
//   [2, 2, 1, 2, 2, 2],
//   [1, 2, 2, 2, 1, 2]
// ]
//  =>
// [
//   [0, 1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10, 11]
// ]
var maximumMinimumPath = function(grid) {
  // let m = grid.length;
  // if (m == 0) {
  //   return 0;
  // }
  // let n = grid[0].length;

  // let edges = Array(m * n);
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     let index = i * n + j;
  //     edges[index] = [index, grid[i][j]];
  //   }
  // }
  
  // edges.sort((a, b) => b[1] - a[1]);

  // let max = Infinity;
  // let uf = new UnionFind(edges.length);
  // for (let i = 0; i < edges.length - 1; i++) {
  //   if (edges[i][0] == 0 || edges[i][0] == m * n - 1) {
  //     continue;
  //   }
  //   if (!uf.isConnected(edges[i][0], edges[i + 1][0])) {
  //     uf.union(edges[i][0], edges[i + 1][0]);
  //     max = Math.min(max, edges[i][1], edges[i + 1][1]);
  //   }
  //   if (uf.isConnected(0, m * n - 1)) {
  //     return max;
  //   }
  // }
  // return 0;
};

var maximumMinimumPath = function(grid) {
  // let m = grid.length;
  // if (m == 0) {
  //   return 0;
  // }
  // let n = grid[0].length;

  // let edges = [];
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     let curIndex = i * n + j;
  //     if (i + 1 < m) {
  //       let nextI = (i + 1) * n + j;
  //       edges.push([curIndex, nextI, grid[i][j]]);
  //     }
  //     if (j + 1 < n) {
  //       let nextJ = i * n + j + 1;
  //       edges.push([curIndex, nextJ, grid[i][j]]);
  //     }
  //   }
  // }

  // [
  //   [1,1,0,3,1,1],
  //   [0,1,0,1,1,0],
  //   [3,3,1,3,1,1],
  //   [0,3,2,2,0,0],
  //   [1,0,1,2,3,0]
  // ]

  // [
  //   [ 0, 5, 3 ],   [ 0, 1, 3 ],   [ 1, 6, 4 ],
  //   [ 1, 2, 4 ],   [ 2, 7, 6 ],   [ 2, 3, 6 ],
  //   [ 3, 8, 3 ],   [ 3, 4, 3 ],   [ 4, 9, 4 ],
  //   [ 5, 10, 0 ],  [ 5, 6, 0 ],   [ 6, 11, 2 ],
  //   [ 6, 7, 2 ],   [ 7, 12, 1 ],  [ 7, 8, 1 ],
  //   [ 8, 13, 1 ],  [ 8, 9, 1 ],   [ 9, 14, 7 ],
  //   [ 10, 15, 8 ], [ 10, 11, 8 ], [ 11, 16, 8 ],
  //   [ 11, 12, 8 ], [ 12, 17, 3 ], [ 12, 13, 3 ],
  //   [ 13, 18, 2 ], [ 13, 14, 2 ], [ 14, 19, 7 ],
  //   [ 15, 20, 3 ], [ 15, 16, 3 ], [ 16, 21, 2 ],
  //   [ 16, 17, 2 ], [ 17, 22, 4 ], [ 17, 18, 4 ],
  //   [ 18, 23, 9 ], [ 18, 19, 9 ], [ 19, 24, 8 ],
  //   [ 20, 25, 4 ], [ 20, 21, 4 ], [ 21, 26, 1 ],
  //   [ 21, 22, 1 ], [ 22, 27, 2 ], [ 22, 23, 2 ],
  //   [ 23, 28, 0 ], [ 23, 24, 0 ], [ 24, 29, 0 ],
  //   [ 25, 26, 4 ], [ 26, 27, 6 ], [ 27, 28, 5 ],
  //   [ 28, 29, 4 ]
  // ]
  
  // let uf = new UnionFind(edges.length);
  // edges.sort((a, b) => b[2] - a[2]);
  // let min = Infinity;
  // for (let i = 0; i < edges.length; i++) {
  //   if (!uf.isConnected(edges[i][0], edges[i][1])) {
  //     uf.union(edges[i][0], edges[i][1]);
  //     min = Math.min(min, edges[i][2]);
  //   }
  //   if (uf.isConnected(0, m * n - 1)) {
  //     return Math.min(min, grid[m - 1][n - 1]);
  //   }
  // }
  // return 0;
};