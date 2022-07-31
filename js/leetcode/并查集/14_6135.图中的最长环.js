// 6135. 图中的最长环
// 给你一个 n 个节点的 有向图 ，节点编号为 0 到 n - 1 ，其中每个节点 至多 有一条出边。

// 图用一个大小为 n 下标从 0 开始的数组 edges 表示，节点 i 到节点 edges[i] 之间有一条有向边。如果节点 i 没有出边，那么 edges[i] == -1 。

// 请你返回图中的 最长 环，如果没有任何环，请返回 -1 。

// 一个环指的是起点和终点是 同一个 节点的路径。

// 示例 1：

// 输入：edges = [3,3,4,2,3]
// 输出去：3
// 解释：图中的最长环是：2 -> 4 -> 3 -> 2 。
// 这个环的长度为 3 ，所以返回 3 。
// 示例 2：

// 输入：edges = [2,-1,3,1]
// 输出：-1
// 解释：图中没有任何环。

/**
 * @param {number[]} edges
 * @return {number}
 */
// 1.竞赛时的解法，对每个点求它的路径，有环则记录最大距离。超时
var longestCycle = function (edges) {
  let n = edges.length;

  // 邻接表
  let graph = Array(n);
  for (let i = 0; i < edges.length; i++) {
    graph[i] = [];
    if (edges[i] >= 0) {
      graph[i].push(edges[i]);
    }
  }

  function bfs(graph, v) {
    let queue = [];
    queue.push(v);
    let visited = new Map();
    visited.set(v, 0);

    let res = -1;
    while (queue.length) {
      let len = queue.length;

      for (let i = 0; i < len; i++) {
        let cur = queue.shift();

        for (let j = 0; j < graph[cur].length; j++) {
          if (graph[cur][j] == v) {

            res = visited.get(cur) + 1;
          }
          if (!visited.has(graph[cur][j])) {
            queue.push(graph[cur][j]);
            visited.set(graph[cur][j], visited.get(cur) + 1);
          }
        }
      }
    }
    return res;
  }

  let res = -1;
  for (let i = 0; i < graph.length; i++) {
    res = Math.max(res, bfs(graph, i));
  }
  return res;
};


// 2.并查集
class UnionFind {
  constructor(size) {
    this.parent = Array(size);
    this.size = Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
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

    // 基于size合并
    if (this.size[pRoot] < this.size[qRoot]) {
      this.parent[qRoot] = pRoot;
      this.size[pRoot] += this.size[qRoot];
    } else {
      this.parent[pRoot] = qRoot;
      this.size[qRoot] += this.size[pRoot];
    }
  }
}

var longestCycle = function (edges) {
  let n = edges.length;
  let uf = new UnionFind(n);
  let ans = -1;
  for (let i = 0; i < edges.length; i++) {
    if (edges[i] == -1) {
      continue;
    }
    if (!uf.isConnected(i, edges[i])) {
      uf.union(i, edges[i]);
      continue;
    }

    let cur = edges[i];
    let res = 1;
    while (cur != i) {
      cur = edges[cur];
      res++;
    }
    ans = Math.max(ans, res);
  }
  return ans;
}