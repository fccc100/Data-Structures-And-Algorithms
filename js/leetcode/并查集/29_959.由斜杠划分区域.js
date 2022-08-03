// 959. 由斜杠划分区域
// 在由 1 x 1 方格组成的 n x n 网格 grid 中，每个 1 x 1 方块由 '/'、'\' 或空格构成。这些字符会将方块划分为一些共边的区域。

// 给定网格 grid 表示为一个字符串数组，返回 区域的数量 。

// 请注意，反斜杠字符是转义的，因此 '\' 用 '\\' 表示。

// 示例 1：

// 输入：grid = [" /","/ "]
// 输出：2
// 示例 2：

// 输入：grid = [" /","  "]
// 输出：1
// 示例 3：

// 输入：grid = ["/\\","\\/"]
// 输出：5
// 解释：回想一下，因为 \ 字符是转义的，所以 "/\\" 表示 /\，而 "\\/" 表示 \/。

class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    this.rank = Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.rank[i] = 1;
    }
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
    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot;
    } else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot;
    } else {
      this.parent[pRoot] = qRoot;
      this.rank[qRoot] += 1;
    }
  }

  getConnectedComponent() {
    let res = 0;
    for (let i = 0; i < this.parent.length; i++) {
      if (this.parent[i] == i) {
        res++;
      }
    }
    return res;
  }
}

/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
  let n = grid.length;
  if (n == 0) {
    return 0;
  }

  // 把每个单元格分成上右下左四个区域，分别编号0 1 2 3
  // 如果是空格，将0 1 2 3合并
  // 如果是 / ，将0 3 和 1 2分别合并
  // 如果是 \ ，将0 1 和 2 3分别合并
  // 同时将当前单元格与右边单元格和下边单元格合并
  // 最后返回连通分量个数
  let uf = new UnionFind(n * n * 4);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let curIndex = i * n + j;
      if (grid[i][j] == ' ') {
        uf.union(curIndex * 4 + 0, curIndex * 4 + 1);
        uf.union(curIndex * 4 + 1, curIndex * 4 + 2);
        uf.union(curIndex * 4 + 2, curIndex * 4 + 3);
      } else if (grid[i][j] == '/') {
        uf.union(curIndex * 4 + 0, curIndex * 4 + 3);
        uf.union(curIndex * 4 + 1, curIndex * 4 + 2);
      } else if (grid[i][j] == '\\') {
        uf.union(curIndex * 4 + 0, curIndex * 4 + 1);
        uf.union(curIndex * 4 + 2, curIndex * 4 + 3);
      }

      if (j + 1 < n) {
        let nextIndex = i * n + j + 1;
        uf.union(curIndex * 4 + 1, nextIndex * 4 + 3);
      }
      if (i + 1 < n) {
        let next = (i + 1) * n + j;
        uf.union(curIndex * 4 + 2, next * 4 + 0);
      }
    }
  }

  return uf.getConnectedComponent();
};