// 面试题 04.01. 节点间通路
// 节点间通路。给定有向图，设计一个算法，找出两个节点之间是否存在一条路径。

// 示例1:

//  输入：n = 3, graph = [[0, 1], [0, 2], [1, 2], [1, 2]], start = 0, target = 2
//  输出：true
// 示例2:

//  输入：n = 5, graph = [[0, 1], [0, 2], [0, 4], [0, 4], [0, 1], [1, 3], [1, 4], [1, 3], [2, 3], [3, 4]], start = 0, target = 4
//  输出 true

/**
 * @param {number} n
 * @param {number[][]} graph
 * @param {number} start
 * @param {number} target
 * @return {boolean}
 */
// 邻接表建图，dfs判断是否存在路
var findWhetherExistsPath = function (n, graph, start, target) {
  let myGraph = Array(n);
  for (let i = 0; i < n; i++) {
    myGraph[i] = [];
  }

  for (let i = 0; i < graph.length; i++) {
    myGraph[graph[i][0]].push(graph[i][1]);
  }

  let visited = Array(n).fill(false);

  function dfs(v) {
    visited[v] = true;

    for (let i = 0; i < myGraph[v].length; i++) {
      if (!visited[myGraph[v][i]]) {
        dfs(myGraph[v][i]);
      }
    }
  }

  dfs(start);
  return start == target || visited[target];
};