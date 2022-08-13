// 1192. 查找集群内的「关键连接」
// 力扣数据中心有 n 台服务器，分别按从 0 到 n-1 的方式进行了编号。它们之间以「服务器到服务器」点对点的形式相互连接组成了一个内部集群，其中连接 connections 是无向的。从形式上讲，connections[i] = [a, b] 表示服务器 a 和 b 之间形成连接。任何服务器都可以直接或者间接地通过网络到达任何其他服务器。

// 「关键连接」 是在该集群中的重要连接，也就是说，假如我们将它移除，便会导致某些服务器无法访问其他服务器。

// 请你以任意顺序返回该集群内的所有 「关键连接」。

// 示例 1：

// 输入：n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
// 输出：[[1,3]]
// 解释：[[3,1]] 也是正确的。
// 示例 2:

// 输入：n = 2, connections = [[0,1]]
// 输出：[[0,1]]

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
// 删除每条边看是否只有一个联通分量，使用rank合并的并查集任超时
var criticalConnections = function (n, connections) {
  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < connections.length; i++) {
    graph[connections[i][0]].push(connections[i][1]);
    graph[connections[i][1]].push(connections[i][0]);
  }

  let res = [];
  for (let i = 0; i < connections.length; i++) {
    let cnt = find(n, connections, i);

    if (cnt > 1) {
      res.push([connections[i][0], connections[i][1]]);
    }
  }
  return res;
};

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

function find(n, edges, removeIndex) {
  let uf = new UnionFind(n);
  for (let i = 0; i < edges.length; i++) {
    if (removeIndex == i) continue;

    if (!uf.isConnected(edges[i][0], edges[i][1])) {
      uf.union(edges[i][0], edges[i][1]);
    }
  }
  return uf.getConnectedComponent();
}

// 2.
var criticalConnections = function (n, connections) {
  
}