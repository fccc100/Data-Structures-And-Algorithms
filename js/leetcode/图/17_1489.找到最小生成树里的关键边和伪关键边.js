// 1489. 找到最小生成树里的关键边和伪关键边
// 给你一个 n 个点的带权无向连通图，节点编号为 0 到 n-1 ，同时还有一个数组 edges ，其中 edges[i] = [fromi, toi, weighti] 表示在 fromi 和 toi 节点之间有一条带权无向边。最小生成树 (MST) 是给定图中边的一个子集，它连接了所有节点且没有环，而且这些边的权值和最小。

// 请你找到给定图中最小生成树的所有关键边和伪关键边。如果从图中删去某条边，会导致最小生成树的权值和增加，那么我们就说它是一条关键边。伪关键边则是可能会出现在某些最小生成树中但不会出现在所有最小生成树中的边。

// 请注意，你可以分别以任意顺序返回关键边的下标和伪关键边的下标。

// 示例 1：

// 输入：n = 5, edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
// 输出：[[0,1],[2,3,4,5]]
// 解释：上图描述了给定图。
// 下图是所有的最小生成树。

// 注意到第 0 条边和第 1 条边出现在了所有最小生成树中，所以它们是关键边，我们将这两个下标作为输出的第一个列表。
// 边 2，3，4 和 5 是所有 MST 的剩余边，所以它们是伪关键边。我们将它们作为输出的第二个列表。
// 示例 2 ：

// 输入：n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]
// 输出：[[],[0,1,2,3]]
// 解释：可以观察到 4 条边都有相同的权值，任选它们中的 3 条可以形成一棵 MST 。所以 4 条边都是伪关键边。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var findCriticalAndPseudoCriticalEdges = function(n, edges) {
  // 邻接表建图
  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = new Map();
  }

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].set(edges[i][1], edges[i][2]);
    graph[edges[i][1]].set(edges[i][0], edges[i][2]);
  }

  // 求出整个图的最小生成树
  let minTree = kruskal(n, edges, -1);

  let res = Array(2);
  res[0] = [];
  res[1] = [];
  for (let i = 0; i < edges.length; i++) {
    let curMinTree = kruskal(n, edges, i);
    if (curMinTree > minTree) {
      res[0].push(i);
    } else {
      let curPriorityMinTree = kruskal1(n, edges, i);
      if (curPriorityMinTree == minTree) {
        res[1].push(i);
      }
    }
  }

  return res;
};

// 并查集，求最小生成树时判断是否有环
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

// 求最小生成树的总权值
function kruskal(n, edges, removeIndex) {
  let tempEdges = edges.slice();
  for (let i = 0; i < tempEdges.length; i++) {
    tempEdges[i] = edges[i].slice()
  }
  let uf1 = new UnionFind(n);
  for (let i = 0; i < tempEdges.length; i++) {
    if (i == removeIndex) continue;
    uf1.union(tempEdges[i][0], tempEdges[i][1]);
  }
  if (uf1.getConnectedComponent() != 1) {
    return Infinity;
  }

  let removeItem = tempEdges[removeIndex];

  tempEdges.sort((a, b) => a[2] - b[2]);

  let uf = new UnionFind(n);
  let weight = 0;
  for (let i = 0; i < tempEdges.length; i++) {
    if (tempEdges[i] == removeItem) {
      continue;
    }

    if (!uf.isConnected(tempEdges[i][0], tempEdges[i][1])) {
      weight += tempEdges[i][2];
      uf.union(tempEdges[i][0], tempEdges[i][1]);
    }
  }

  // let cnt = uf.getConnectedComponent()
  return weight;
}

// 求优先加入某条边的最小生成树总权值
function kruskal1(n, edges, priorityIndex) {
  let tempEdges = edges.slice();
  for (let i = 0; i < tempEdges.length; i++) {
    tempEdges[i] = edges[i].slice()
  }
  let priorityItem = tempEdges[priorityIndex];

  tempEdges.sort((a, b) => a[2] - b[2]);

  let uf = new UnionFind(n);
  uf.union(priorityItem[0], priorityItem[1]);

  let weight = priorityItem[2];
  for (let i = 0; i < tempEdges.length; i++) {
    if (tempEdges[i] == priorityItem) {
      continue;
    }

    if (!uf.isConnected(tempEdges[i][0], tempEdges[i][1])) {
      weight += tempEdges[i][2];
      uf.union(tempEdges[i][0], tempEdges[i][1]);
    }
  }
  return weight;
}