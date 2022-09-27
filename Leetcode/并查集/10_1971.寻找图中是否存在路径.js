// 1971. 寻找图中是否存在路径
// 有一个具有 n个顶点的 双向 图，其中每个顶点标记从 0 到 n - 1（包含 0 和 n - 1）。图中的边用一个二维整数数组 edges 表示，其中 edges[i] = [ui, vi] 表示顶点 ui 和顶点 vi 之间的双向边。 每个顶点对由 最多一条 边连接，并且没有顶点存在与自身相连的边。

// 请你确定是否存在从顶点 start 开始，到顶点 end 结束的 有效路径 。

// 给你数组 edges 和整数 n、start和end，如果从 start 到 end 存在 有效路径 ，则返回 true，否则返回 false 。

// 示例 1：

// 输入：n = 3, edges = [[0,1],[1,2],[2,0]], start = 0, end = 2
// 输出：true
// 解释：存在由顶点 0 到顶点 2 的路径:
// - 0 → 1 → 2 
// - 0 → 2
// 示例 2：

// 输入：n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], start = 0, end = 5
// 输出：false
// 解释：不存在由顶点 0 到顶点 5 的路径.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
// 1.使用并查集，查看两个点是否在同一个联通分量中
var validPath = function (n, edges, source, destination) {
  let uf = new UnionFind(n);

  for (let i = 0; i < edges.length; i++) {
    uf.union(edges[i][0], edges[i][1]);
  }

  return uf.findRoot(source) == uf.findRoot(destination);
};

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

  union(p, q) {
    let pRoot = this.findRoot(p);
    let qRoot = this.findRoot(q);
    if (pRoot != qRoot) {
      this.parent[pRoot] = qRoot;
    }
  }
}

// 2.邻接矩阵建图, 空间超了
var validPath = function (n, edges, source, destination) {
  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = Array(n).fill(false);
  }

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]][edges[i][1]] = true;
    graph[edges[i][1]][edges[i][0]] = true;
  }

  let visited = Array(n).fill(false);

  function dfs(v) {
    visited[v] = true;
    for (let i = 0; i < graph[v].length; i++) {
      if (graph[v][i] && !visited[i]) {
        dfs(i);
      }
    }
  }

  dfs(source);
  return source == destination || visited[destination];
};

// 3.邻接表, 勉强通过
var validPath = function (n, edges, source, destination) {
  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }
  
  let visited = Array(n).fill(false);

  function dfs(v) {
    visited[v] = true;

    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {
        dfs(graph[v][i]);
      }
    }
  }

  dfs(source);
  return source == destination || visited[destination];
}