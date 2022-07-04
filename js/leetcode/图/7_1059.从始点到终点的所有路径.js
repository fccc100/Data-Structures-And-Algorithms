// 1059. 从始点到终点的所有路径
// 给定有向图的边 edges，以及该图的始点 source 和目标终点 destination，确定从始点 source 出发的所有路径是否最终结束于目标终点 destination，即：

// 从始点 source 到目标终点 destination 存在至少一条路径
// 如果存在从始点 source 到没有出边的节点的路径，则该节点就是路径终点。
// 从始点source到目标终点 destination 可能路径数是有限数字
// 当从始点 source 出发的所有路径都可以到达目标终点 destination 时返回 true，否则返回 false。

// 示例 1：

// 输入：n = 3, edges = [[0,1],[0,2]], source = 0, destination = 2
// 输出：false
// 说明：节点 1 和节点 2 都可以到达，但也会卡在那里。
// 示例 2：

// 输入：n = 4, edges = [[0,1],[0,3],[1,2],[2,1]], source = 0, destination = 3
// 输出：false
// 说明：有两种可能：在节点 3 处结束，或是在节点 1 和节点 2 之间无限循环。
// 示例 3：

// 输入：n = 4, edges = [[0,1],[0,2],[1,3],[2,3]], source = 0, destination = 3
// 输出：true

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function(n, edges, source, destination) {
  // let graph = Array(n);
  // for (let i = 0; i < n; i++) {
  //   graph[i] = [];
  // }
  // for (let i = 0; i < edges.length; i++) {
  //   graph[edges[i][0]].push(edges[i][1]);
  // }

  // let visited = Array(n).fill(false);
  // function dfs(graph, v, n) {
  //   if (v == n && !graph[v].length) {
  //     return true;
  //   }

  //   if (v !== n) {
  //     if (!graph[v].length) {
  //       return false;
  //     }


  //   }

  //   let res = true;
  //   visited[v] = true;
  //   for (let i = 0; i < graph[v].length; i++) {
  //     if (!visited[graph[v][i]]) {
  //       res = res && dfs(graph, graph[v][i], n);
  //     }
  //   }
  //   return res;
  // }

  // return dfs(graph, source, destination);
};