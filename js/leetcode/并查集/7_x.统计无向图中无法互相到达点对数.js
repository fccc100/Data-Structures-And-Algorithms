// 6106. 统计无向图中无法互相到达点对数
// 给你一个整数 n ，表示一张 无向图 中有 n 个节点，编号为 0 到 n - 1 。
// 同时给你一个二维整数数组 edges ，其中 edges[i] = [ai, bi] 表示节点 ai 和 bi 之间有一条 无向 边。

// 请你返回 无法互相到达 的不同 点对数目 。

// 示例 1：

// 输入：n = 3, edges = [[0,1],[0,2],[1,2]]
// 输出：0
// 解释：所有点都能互相到达，意味着没有点对无法互相到达，所以我们返回 0 。
// 示例 2：

// 输入：n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]
// 输出：14
// 解释：总共有 14 个点对互相无法到达：
// [[0,1],[0,3],[0,6],[1,2],[1,3],[1,4],[1,5],[2,3],[2,6],[3,4],[3,5],[3,6],[4,6],[5,6]]
// 所以我们返回 14 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// 1.
// 并查集，这种方法超时了
var countPairs = function(n, edges) {
  let uf = new UnionFind(n);
  for (let i = 0; i < edges.length; i++) {
    uf.union(edges[i][0], edges[i][1]);
  }

  return uf.countPairs();
};

class UnionFind {
  constructor(size) {
    this.parent = Array(size);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    } 
  }

  findRoot(p) {
    while(this.parent[p] != p) {
      p = this.parent[p];
    }
    return p;
  }

  union(p, q) {
    let pRoot = this.findRoot(p);
    let qRoot = this.findRoot(q);
    if (pRoot != qRoot) {
      this.parent[pRoot] = qRoot;
    }
  }

  countPairs() {
    let map = new Map();
    for (let i = 0; i < this.parent.length; i++) {
      if (this.parent[i] == i) {
        map.set(i, map.get(i) ? map.get(i) + 1 : 1);
      } else {

        let p = i;
        while(p != this.parent[p]) {
          p = this.parent[p];
        }
        map.set(p, map.get(p) ? map.get(p) + 1 : 1);
      }
    }

    let res = [];
    for (let entry of map) {
      res.push(entry[1]);
    }

    let ans = 0;
    for (let i = 0; i < res.length; i++) {
      for (let j = i + 1; j < res.length; j++) {
        ans += res[i] * res[j];
      }
    }
    return ans;
  }
}

// 2.
// 使用所有对数减去连通的对数, 勉强能通过
var countPairs = function(n, edges) {
  let uf = new UnionFind(n);
  for (let i = 0; i < edges.length; i++) {
    uf.union(edges[i][0], edges[i][1]);
  }

  return uf.countPairs();
};

class UnionFind {
  constructor(size) {
    this.parent = Array(size);

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    } 
  }

  findRoot(p) {
    while(this.parent[p] != p) {
      p = this.parent[p];
    }
    return p;
  }

  union(p, q) {
    let pRoot = this.findRoot(p);
    let qRoot = this.findRoot(q);
    if (pRoot != qRoot) {
      this.parent[pRoot] = qRoot;
    }
  }

  countPairs() {
    let n = this.parent.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
      if (this.parent[i] == i) {
        map.set(i, map.get(i) ? map.get(i) + 1 : 1);
      } else {

        let p = i;
        while(p != this.parent[p]) {
          p = this.parent[p];
        }
        map.set(p, map.get(p) ? map.get(p) + 1 : 1);
      }
    }

    let total = n * (n - 1) / 2;
    
    let connectedCount = 0;
    for (let entry of map) {
      let cur = entry[1] * (entry[1] - 1) / 2;
      connectedCount += cur;
    }

    return total - connectedCount;
  }
}
