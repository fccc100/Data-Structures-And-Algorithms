// 778. 水位上升的泳池中游泳
// 在一个 n x n 的整数矩阵 grid 中，每一个方格的值 grid[i][j] 表示位置 (i, j) 的平台高度。

// 当开始下雨时，在时间为 t 时，水池中的水位为 t 。你可以从一个平台游向四周相邻的任意一个平台，但是前提是此时水位必须同时淹没这两个平台。
// 假定你可以瞬间移动无限距离，也就是默认在方格内部游动是不耗时的。当然，在你游泳的时候你必须待在坐标方格里面。

// 你从坐标方格的左上平台 (0，0) 出发。返回 你到达坐标方格的右下平台 (n-1, n-1) 所需的最少时间 。

// 示例 1:

// 输入: grid = [[0,2],[1,3]]
// 输出: 3
// 解释:
// 时间为0时，你位于坐标方格的位置为 (0, 0)。
// 此时你不能游向任意方向，因为四个相邻方向平台的高度都大于当前时间为 0 时的水位。
// 等时间到达 3 时，你才可以游向平台 (1, 1). 因为此时的水位是 3，坐标方格中的平台没有比水位 3 更高的，所以你可以游向坐标方格中的任意位置
// 示例 2:

// 输入: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
// 输出: 16
// 解释: 最终的路线用加粗进行了标记。
// 我们必须等到时间为 16，此时才能保证平台 (0, 0) 和 (4, 4) 是连通的

// 普通并查集
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
var swimInWater = function(grid) {
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
        let nextIndex = (i + 1) * n + j;
        edges.push([curIndex, nextIndex, Math.max(grid[i][j], grid[i + 1][j])]);
      }
      if (j + 1 < n) {
        let nextIndex = i * n + j + 1;
        edges.push([curIndex, nextIndex, Math.max(grid[i][j], grid[i][j + 1])]);
      }
    }
  }

  let uf = new UnionFind(m * n);
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

// 基于rank优化的并查集
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
var swimInWater = function(grid) {
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
        let nextIndex = (i + 1) * n + j;
        edges.push([curIndex, nextIndex, Math.max(grid[i][j], grid[i + 1][j])]);
      }
      if (j + 1 < n) {
        let nextIndex = i * n + j + 1;
        edges.push([curIndex, nextIndex, Math.max(grid[i][j], grid[i][j + 1])]);
      }
    }
  }

  let uf = new UnionFind(m * n);
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