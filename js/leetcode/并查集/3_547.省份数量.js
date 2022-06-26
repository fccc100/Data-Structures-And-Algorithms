// 547. 省份数量
// 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。

// 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。

// 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。

// 返回矩阵中 省份 的数量。

// 示例 1：

// 输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// 输出：2
// 示例 2：

// 输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// 输出：3

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  let uf = new UnionFind(isConnected.length);
  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] == 1) {
        uf.union(i, j);
      }
    }
  }

  return uf.cities();
};

// 并查集
class UnionFind {
  constructor(size) {
    this.parent = Array(size);

    // 初始时，每个点都是独立的
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
  }

  size() {
    return this.parent.length;
  }

  cities() {
    let res = 0;
    for (let i = 0; i < this.parent.length; i++) {
      if (this.parent[i] == i) {
        res++;
      }
    }
    return res;
  }

  // 查询一个点的根
  findRoot(p) {
    while(this.parent[p] != p) {
      p = this.parent[p];
    }
    return p;
  }

  // 判断两个点是否在一个集合中
  isConnected(p, q) {
    return this.findRoot(p) == this.findRoot(q);
  }

  // 合并两个点
  union(p, q) {
    let pRoot = this.findRoot(p);
    let qRoot = this.findRoot(q);

    if (pRoot != qRoot) {
      this.parent[pRoot] = qRoot;
    }
  }
}