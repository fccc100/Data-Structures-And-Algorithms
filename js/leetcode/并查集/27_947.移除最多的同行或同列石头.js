// 947. 移除最多的同行或同列石头
// n 块石头放置在二维平面中的一些整数坐标点上。每个坐标点上最多只能有一块石头。

// 如果一块石头的 同行或者同列 上有其他石头存在，那么就可以移除这块石头。

// 给你一个长度为 n 的数组 stones ，其中 stones[i] = [xi, yi] 表示第 i 块石头的位置，返回 可以移除的石子 的最大数量。

// 示例 1：

// 输入：stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
// 输出：5
// 解释：一种移除 5 块石头的方法如下所示：
// 1. 移除石头 [2,2] ，因为它和 [2,1] 同行。
// 2. 移除石头 [2,1] ，因为它和 [0,1] 同列。
// 3. 移除石头 [1,2] ，因为它和 [1,0] 同行。
// 4. 移除石头 [1,0] ，因为它和 [0,0] 同列。
// 5. 移除石头 [0,1] ，因为它和 [0,0] 同行。
// 石头 [0,0] 不能移除，因为它没有与另一块石头同行/列。
// 示例 2：

// 输入：stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
// 输出：3
// 解释：一种移除 3 块石头的方法如下所示：
// 1. 移除石头 [2,2] ，因为它和 [2,0] 同行。
// 2. 移除石头 [2,0] ，因为它和 [0,0] 同列。
// 3. 移除石头 [0,2] ，因为它和 [0,0] 同行。
// 石头 [0,0] 和 [1,1] 不能移除，因为它们没有与另一块石头同行/列。
// 示例 3：

// 输入：stones = [[0,0]]
// 输出：0
// 解释：[0,0] 是平面上唯一一块石头，所以不可以移除它。

// 2    '    '

// 1'        '

// 0'   1'   2 

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
    for (let i = 0; i < this.parent.length; i++) {
      if (this.parent[i] == i) {
        res++;
      }
    }
    return res;
  }
}

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
  let m = stones.length;

  let uf = new UnionFind(m);
  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      if (stones[i][0] == stones[j][0] || stones[i][1] == stones[j][1]) {
        if (!uf.isConnected(i, j)) {
          uf.union(i, j);
        }
      }
    }
  }

  return m - uf.getConnectedComponent();
};