// 剑指 Offer II 110. 所有路径
// 给定一个有 n 个节点的有向无环图，用二维数组 graph 表示，请找到所有从 0 到 n-1 的路径并输出（不要求按顺序）。

// graph 的第 i 个数组中的单元都表示有向图中 i 号节点所能到达的下一些结点（译者注：有向图是有方向的，即规定了 a→b 你就不能从 b→a ），若为空，就是没有下一个节点了。

// 示例 1：

// 输入：graph = [[1,2],[3],[3],[]]
// 输出：[[0,1,3],[0,2,3]]
// 解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3
// 示例 2：

// 输入：graph = [[4,3,1],[3,2,4],[3],[4],[]]
// 输出：[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
// 示例 3：

// 输入：graph = [[1],[]]
// 输出：[[0,1]]
// 示例 4：

// 输入：graph = [[1,2,3],[2],[3],[]]
// 输出：[[0,1,2,3],[0,2,3],[0,3]]
// 示例 5：

// 输入：graph = [[1,3],[2],[3],[]]
// 输出：[[0,1,2,3],[0,3]]

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  let res = [];
  let path = [];
  function dfs(graph, v, n) {
    if (v == n) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < graph[v].length; i++) {
      path.push(graph[v][i]);
      dfs(graph, graph[v][i], n);
      path.pop();
    }
  }

  path.push(0);
  dfs(graph, 0, graph.length - 1);
  return res;
};