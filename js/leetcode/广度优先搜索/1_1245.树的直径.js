// 1245. 树的直径
// 给你这棵「无向树」，请你测算并返回它的「直径」：这棵树上最长简单路径的 边数。

// 我们用一个由所有「边」组成的数组 edges 来表示一棵无向树，其中 edges[i] = [u, v] 表示节点 u 和 v 之间的双向边。

// 树上的节点都已经用 {0, 1, ..., edges.length} 中的数做了标记，每个节点上的标记都是独一无二的。

// 示例 1：

// 输入：edges = [[0,1],[0,2]]
// 输出：2
// 解释：
// 这棵树上最长的路径是 1 - 0 - 2，边数为 2。
// 示例 2：

// 输入：edges = [[0,1],[1,2],[2,3],[1,4],[4,5]]
// 输出：4
// 解释： 
// 这棵树上最长的路径是 3 - 2 - 1 - 4 - 5，边数为 4。

/**
 * @param {number[][]} edges
 * @return {number}
 */

 var treeDiameter = function(edges) {
  // let n = edges.length + 1;

  // // 邻接表建图
  // let graph = Array(n);
  // for (let i = 0; i < n; i++) {
  //   graph[i] = [];
  // }

  // for (let i = 0; i < edges.length; i++) {
  //   graph[edges[i][0]].push(edges[i][1]);
  //   graph[edges[i][1]].push(edges[i][0]);
  // }

  // let visited = Array(n).fill(false);

  // function bfs(v) {
  //   let queue = [];

  // 这里bfs求得结果res只是节点数量,不是最长路径
  //   queue.push(v);
  //   visited[v] = true;
  //   let res = 0;
  //   while(queue.length) {
  //     let cur = queue.shift();
  //     for (let i = 0; i < graph[cur].length; i++) {
  //       if (!visited[graph[cur][i]]) {
  //         queue.push(graph[cur][i]);
  //         visited[graph[cur][i]] = true;
  //       }
  //     }
  //     res++;
  //   }
  //   return res;
  // }

  // let res = 0;
  // for (let i = 0; i < n; i++) {
  //   visited.fill(false);

  //   res = Math.max(res, bfs(i));
  // }
  // return res;
};