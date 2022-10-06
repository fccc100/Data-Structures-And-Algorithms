// 1557. 可以到达所有点的最少点数目
// 给你一个 有向无环图 ， n 个节点编号为 0 到 n-1 ，以及一个边数组 edges ，其中 edges[i] = [fromi, toi] 表示一条从点  fromi 到点 toi 的有向边。

// 找到最小的点集使得从这些点出发能到达图中所有点。题目保证解存在且唯一。

// 你可以以任意顺序返回这些节点编号。

// 示例 1：

// 输入：n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
// 输出：[0,3]
// 解释：从单个节点出发无法到达所有节点。从 0 出发我们可以到达 [0,1,2,5] 。从 3 出发我们可以到达 [3,4,2,5] 。所以我们输出 [0,3] 。
// 示例 2：

// 输入：n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
// 输出：[0,2,3]
// 解释：注意到节点 0，3 和 2 无法从其他节点到达，所以我们必须将它们包含在结果点集中，这些点都能到达节点 1 和 4 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
  // 邻接表建图
  // let graph = Array(n);
  // for (let i = 0; i < n; i++) {
  //   graph[i] = [];
  // }

  // for (let i = 0; i < edges.length; i++) {
  //   graph[edges[i][0]].push(edges[i][1]);
  // }

  // let paths = [];
  // function dfs(v, path, visited) {
  //   path.push(v);

  //   visited[v] = true;
  //   for (let i = 0; i < graph[v].length; i++) {
  //     if (!visited[graph[v][i]]) {
  //       dfs(graph[v][i], path, visited);
  //     }
  //   }
  // }

  // for (let i = 0; i < n; i++) {
  //   let path = [];
  //   let visited = Array(n).fill(false);
  //   dfs(i, path, visited);
  //   paths.push(path);
  // }

};

// 2.找入度为0的顶点，入度为0必须选择该点
var findSmallestSetOfVertices = function(n, edges) {
  let set = new Set();
  for (let i = 0; i < edges.length; i++) {
    set.add(edges[i][1]);
  }

  let res = [];
  for (let i = 0; i < n; i++) {
    if (!set.has(i)) {
      res.push(i);
    }
  }
  return res;
}