// 1391. 检查网格中是否存在有效路径
// 给你一个 m x n 的网格 grid。网格里的每个单元都代表一条街道。grid[i][j] 的街道可以是：

// 1 表示连接左单元格和右单元格的街道。
// 2 表示连接上单元格和下单元格的街道。
// 3 表示连接左单元格和下单元格的街道。
// 4 表示连接右单元格和下单元格的街道。
// 5 表示连接左单元格和上单元格的街道。
// 6 表示连接右单元格和上单元格的街道。

// 你最开始从左上角的单元格 (0,0) 开始出发，网格中的「有效路径」是指从左上方的单元格 (0,0) 开始、一直到右下方的 (m-1,n-1) 结束的路径。
// 该路径必须只沿着街道走。

// 注意：你 不能 变更街道。

// 如果网格中存在有效的路径，则返回 true，否则返回 false 。

// 示例 1：

// 输入：grid = [[2,4,3],[6,5,2]]
// 输出：true
// 解释：如图所示，你可以从 (0, 0) 开始，访问网格中的所有单元格并到达 (m - 1, n - 1) 。
// 示例 2：

// 输入：grid = [[1,2,1],[1,2,1]]
// 输出：false
// 解释：如图所示，单元格 (0, 0) 上的街道没有与任何其他单元格上的街道相连，你只会停在 (0, 0) 处。
// 示例 3：

// 输入：grid = [[1,1,2]]
// 输出：false
// 解释：你会停在 (0, 1)，而且无法到达 (0, 2) 。
// 示例 4：

// 输入：grid = [[1,1,1,1,1,1,3]]
// 输出：true
// 示例 5：

// 输入：grid = [[2],[2],[2],[2],[2],[2],[6]]
// 输出：true

class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    this.rank = Array(size);
    for (let i = 0; i < size; i ++) {
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
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
  let m = grid.length;
  if (m == 0) {
    return true;
  }
  let n = grid[0].length;
  if (m == 1 && n == 1) {
    return true;
  }

  let edges = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let curIndex = i * n + j;
      // 左右
      if (grid[i][j] == 1) {
        if (j - 1 >= 0) {
          if (grid[i][j - 1] == 1 || grid[i][j - 1] == 4 || grid[i][j - 1] == 6) {
            let nextIndex = i * n + j - 1;
            edges.push([curIndex, nextIndex]);
          }
        }
        if (j + 1 < n) {
          if (grid[i][j + 1] == 1 || grid[i][j + 1] == 3 || grid[i][j + 1] == 5) {
            let nextIndex = i * n + j + 1;
            edges.push([curIndex, nextIndex]);
          }
        }
      }
      // 上下
      else if (grid[i][j] == 2) {
        if (i - 1 >= 0) {
          if (grid[i - 1][j] == 2 || grid[i - 1][j] == 3 || grid[i - 1][j] == 4) {
            let nextIndex = (i - 1) * n + j;
            edges.push([curIndex, nextIndex]);
          }
        }
        if (i + 1 < m) {
          if (grid[i + 1][j] == 2 || grid[i + 1][j] == 5 || grid[i + 1][j] == 6) {
            let nextIndex = (i + 1) * n + j;
            edges.push([curIndex, nextIndex]);
          }
        }
      }
      // 左下
      else if (grid[i][j] == 3) {
        if (j - 1 >= 0) {
          if (grid[i][j - 1] == 1 || grid[i][j - 1] == 4 || grid[i][j - 1] == 6) {
            let nextIndex = i * n + j - 1;
            edges.push([curIndex, nextIndex]);
          }
        }
        if (i + 1 < m) {
          if (grid[i + 1][j] == 2 || grid[i + 1][j] == 5 || grid[i + 1][j] == 6) {
            let nextIndex = (i + 1) * n + j;
            edges.push([curIndex, nextIndex]);
          }
        }
      }
      // 右下
      else if (grid[i][j] == 4) {
        if (j + 1 < n) {
          if (grid[i][j + 1] == 1 || grid[i][j + 1] == 3 || grid[i][j + 1] == 5) {
            let nextIndex = i * n + j + 1;
            edges.push([curIndex, nextIndex]);
          }
        }
        if (i + 1 < m) {
          if (grid[i + 1][j] == 2 || grid[i + 1][j] == 5 || grid[i + 1][j] == 6) {
            let nextIndex = (i + 1) * n + j;
            edges.push([curIndex, nextIndex]);
          }
        }
      }
      // 左上
      else if (grid[i][j] == 5) {
        if (j - 1 >= 0) {
          if (grid[i][j - 1] == 1 || grid[i][j - 1] == 4 || grid[i][j - 1] == 6) {
            let nextIndex = i * n + j - 1;
            edges.push([curIndex, nextIndex]);
          }
        }
        if (i - 1 >= 0) {
          if (grid[i - 1][j] == 2 || grid[i - 1][j] == 3 || grid[i - 1][j] == 4) {
            let nextIndex = (i - 1) * n + j;
            edges.push([curIndex, nextIndex]);
          }
        }
      }
      // 右上
      else if (grid[i][j] == 6) {
        if (j + 1 < n) {
          if (grid[i][j + 1] == 1 || grid[i][j + 1] == 3 || grid[i][j + 1] == 5) {
            let nextIndex = i * n + j + 1;
            edges.push([curIndex, nextIndex]);
          }
        }
        if (i - 1 >= 0) {
          if (grid[i - 1][j] == 2 || grid[i - 1][j] == 3 || grid[i - 1][j] == 4) {
            let nextIndex = (i - 1) * n + j;
            edges.push([curIndex, nextIndex]);
          }
        }
      }
    }
  }

  let uf = new UnionFind(edges.length);
  for (let i = 0; i < edges.length; i++) {
    if (!uf.isConnected(edges[i][0], edges[i][1])) {
      uf.union(edges[i][0], edges[i][1]);
    }

    if (uf.isConnected(0, m * n - 1)) {
      return true;
    }
  }
  return false;
};