// 1631. 最小体力消耗路径
// 你准备参加一场远足活动。给你一个二维 rows x columns 的地图 heights ，其中 heights[row][col] 表示格子 (row, col) 的高度。
// 一开始你在最左上角的格子 (0, 0) ，且你希望去最右下角的格子 (rows-1, columns-1) （注意下标从 0 开始编号）。
// 你每次可以往 上，下，左，右 四个方向之一移动，你想要找到耗费 体力 最小的一条路径。

// 一条路径耗费的 体力值 是路径上相邻格子之间 高度差绝对值 的 最大值 决定的。

// 请你返回从左上角走到右下角的最小 体力消耗值 。

// 示例 1：

// 输入：heights = [[1,2,2],[3,8,2],[5,3,5]]
// 输出：2
// 解释：路径 [1,3,5,3,5] 连续格子的差值绝对值最大为 2 。
// 这条路径比路径 [1,2,2,2,5] 更优，因为另一条路径差值最大值为 3 。
// 示例 2：

// 输入：heights = [[1,2,3],[3,8,4],[5,3,5]]
// 输出：1
// 解释：路径 [1,2,3,4,5] 的相邻格子差值绝对值最大为 1 ，比路径 [1,3,5,3,5] 更优。
// 示例 3：

// 输入：heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
// 输出：0
// 解释：上图所示路径不需要消耗任何体力。

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
 * @param {number[][]} heights
 * @return {number}
 */

// [
//   [1, 2, 2],
//   [3, 8, 2],
//   [5, 3, 5]
// ]
var minimumEffortPath = function(heights) {
  let m = heights.length;
  if (m == 0) {
    return 0;
  }
  let n = heights[0].length;

  // 图建模：每个点有通向其右边和下边的两条边，边的权值为其差值的绝对值
  let edges = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let curIndex = i * n + j;
      if (i + 1 < m) {
        let nextI = (i + 1) * n + j;
        edges.push([curIndex, nextI, Math.abs(heights[i][j] - heights[i + 1][j])]);
      }
      if (j + 1 < n) {
        let nextJ = i * n + j + 1;
        edges.push([curIndex, nextJ, Math.abs(heights[i][j] - heights[i][j + 1])]);
      }
    }
  }

  // [
  //   [ 0, 3, 2 ], [ 0, 1, 1 ],
  //   [ 1, 4, 6 ], [ 1, 2, 0 ],
  //   [ 2, 5, 0 ], [ 3, 6, 2 ],
  //   [ 3, 4, 5 ], [ 4, 7, 5 ],
  //   [ 4, 5, 6 ], [ 5, 8, 3 ],
  //   [ 6, 7, 2 ], [ 7, 8, 2 ]
  // ]  
  
  // Kruskal算法
  let uf = new UnionFind(edges.length);

  // 每次连接权值最小的边，如果某次连接后导致第一个节点0和最后一个节点 m * n - 1联通了，当前权就是结果
  edges.sort((a, b) => a[2] - b[2]);
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