// 797. 所有可能的路径
// 给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）

//  graph[i] 是一个从节点 i 可以访问的所有节点的列表（即从节点 i 到节点 graph[i][j]存在一条有向边）。

// 示例 1：

// 输入：graph = [[1,2],[3],[3],[]]
// 输出：[[0,1,3],[0,2,3]]
// 解释：有两条路径 0 -> 1 -> 3 和 0 -> 2 -> 3
// 示例 2：

// 输入：graph = [[4,3,1],[3,2,4],[3],[4],[]]
// 输出：[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
// 求从0 到 n - 1的所有路径
var allPathsSourceTarget = function (graph) {
  let n = graph.length;
  let stack = [];
  let res = [];

  function dfs(graph, v, end) {
    if (v == end) {
      res.push([...stack]);
      return;
    }

    for (let i = 0; i < graph[v].length; i++) {
      stack.push(graph[v][i]);
      dfs(graph, graph[v][i], end);
      stack.pop();
    }
  }

  stack.push(0);
  dfs(graph, 0, n - 1);

  return res;
};