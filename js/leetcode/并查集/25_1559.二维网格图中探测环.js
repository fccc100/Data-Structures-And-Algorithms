// 1559. 二维网格图中探测环
// 给你一个二维字符网格数组 grid ，大小为 m x n ，你需要检查 grid 中是否存在 相同值 形成的环。

// 一个环是一条开始和结束于同一个格子的长度 大于等于 4 的路径。对于一个给定的格子，你可以移动到它上、下、左、右四个方向相邻的格子之一，可以移动的前提是这两个格子有 相同的值 。

// 同时，你也不能回到上一次移动时所在的格子。比方说，环  (1, 1) -> (1, 2) -> (1, 1) 是不合法的，因为从 (1, 2) 移动到 (1, 1) 回到了上一次移动时的格子。

// 如果 grid 中有相同值形成的环，请你返回 true ，否则返回 false 。

// 示例 1：

// 输入：grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]
// 输出：true
// 解释：如下图所示，有 2 个用不同颜色标出来的环：

// 示例 2：

// 输入：grid = [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]
// 输出：true
// 解释：如下图所示，只有高亮所示的一个合法环：

// 示例 3：

// 输入：grid = [["a","b","b"],["b","z","b"],["b","b","a"]]
// 输出：false

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
    // 基于rank优化
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
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function (grid) {
  let m = grid.length;
  if (m == 0) {
    return false;
  }
  let n = grid[0].length;

  // [
  //   ["a","b","b"],
  //   ["b","z","b"],
  //   ["b","b","a"]
  // ]

  // [[ 1, 2 ], [ 2, 5 ], [ 3, 6 ], [ 6, 7 ] ]

  let edges = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let curIndex = i * n + j;
      if (i + 1 < m) {
        let nextIndex = (i + 1) * n + j;
        if (grid[i][j] == grid[i + 1][j]) {
          edges.push([curIndex, nextIndex]);
        }
      }
      if (j + 1 < n) {
        let nextIndex = i * n + j + 1;
        if (grid[i][j] == grid[i][j + 1]) {
          edges.push([curIndex, nextIndex]);
        }
      }
    }
  }

  let uf = new UnionFind(m * n - 1);
  for (let i = 0; i < edges.length; i++) {
    if (!uf.isConnected(edges[i][0], edges[i][1])) {
      uf.union(edges[i][0], edges[i][1]);
    } else {
      return true;
    }
  }
  return false;
};


// 2.不另外使用edges保存点和点直接的连接关系，直接在二维网格中进行合并操作
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
    // 基于rank优化
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
 * @param {character[][]} grid
 * @return {boolean}
 */
 var containsCycle = function (grid) {
  let m = grid.length;
  if (m == 0) {
    return false;
  }
  let n = grid[0].length;

  let uf = new UnionFind(m * n - 1);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 二维索引转一维索引
      let curIndex = i * n + j;
      if (j + 1 < n && grid[i][j] == grid[i][j + 1]) {
        if (!uf.isConnected(curIndex, i * n + j + 1)) {
          uf.union(curIndex, i * n + j + 1);
        } else {
          return true;
        }
      }
      if (i + 1 < m && grid[i][j] == grid[i + 1][j]) {
        if (!uf.isConnected(curIndex, (i + 1) * n + j)) {
          uf.union(curIndex, (i + 1) * n + j);
        } else {
          return true;
        }
      }
    }
  }
  return false;
}