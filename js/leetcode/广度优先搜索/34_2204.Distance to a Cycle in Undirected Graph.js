// 2204. Distance to a Cycle in Undirected Graph
// You are given a positive integer n representing the number of nodes in a connected undirected graph containing exactly one cycle. 
// The nodes are numbered from 0 to n - 1 (inclusive).

// You are also given a 2D integer array edges, where edges[i] = [node1i, node2i] denotes that there is a bidirectional edge connecting node1i and node2i in the graph.

// The distance between two nodes a and b is defined to be the minimum number of edges that are needed to go from a to b.

// Return an integer array answer of size n, where answer[i] is the minimum distance between the ith node and any node in the cycle.

// Example 1:

// Input: n = 7, edges = [[1,2],[2,3],[3,4],[4,1],[0,1],[5,2],[6,5]]
// Output: [1,0,0,0,0,1,2]
// Explanation:
// The nodes 1, 2, 3, and 4 form the cycle.
// The distance from 0 to 1 is 1.
// The distance from 1 to 1 is 0.
// The distance from 2 to 2 is 0.
// The distance from 3 to 3 is 0.
// The distance from 4 to 4 is 0.
// The distance from 5 to 2 is 1.
// The distance from 6 to 2 is 2.
// Example 2:

// Input: n = 9, edges = [[0,1],[1,2],[0,2],[2,6],[6,7],[6,8],[1,3],[3,4],[3,5]]
// Output: [0,0,0,1,2,2,1,2,2]
// Explanation:
// The nodes 0, 1, and 2 form the cycle.
// The distance from 0 to 0 is 0.
// The distance from 1 to 1 is 0.
// The distance from 2 to 2 is 0.
// The distance from 3 to 1 is 1.
// The distance from 4 to 1 is 2.
// The distance from 5 to 1 is 2.
// The distance from 6 to 2 is 1.
// The distance from 7 to 2 is 2.
// The distance from 8 to 2 is 2.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var distanceToCycle = function (n, edges) {
  // 邻接表建图
  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  let visited = Array(n).fill(false);

  // dfs找出环中的任意一点
  let cycleNode
  function dfs(v, preNode) {
    if (cycleNode) return;
    visited[v] = true;
    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {
        dfs(graph[v][i], v);
      } else if (graph[v][i] != preNode) {
        cycleNode = graph[v][i];
        break;
      }
    }
  }
  dfs(0, 0);

  // 求环中所有点
  visited.fill(false)
  let cyclePath;
  function findCyclePath(v, path) {
    if (cyclePath) return;
    visited[v] = true;

    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {

        path.push(graph[v][i]);
        findCyclePath(graph[v][i], path);
        path.pop();
      } else if (graph[v][i] == cycleNode && v != cycleNode && path.length > 2) {
        cyclePath = [...path];
        break;
      }
    }
  }
  findCyclePath(cycleNode, [cycleNode]);

  visited.fill(false);
  let res = Array(n).fill(0);

  // BFS求路径
  let queue = [];
  for (let i = 0; i < cyclePath.length; i++) {
    queue.push([cyclePath[i], 0]);
    visited[cyclePath[i]] = true;
  }

  while (queue.length) {
    let len = queue.length;
    let newQueue = [];

    for (let i = 0; i < len; i++) {
      let curPath = queue[i];
      let curV = curPath[0];
      let curLen = curPath[1];

      for (let j = 0; j < graph[curV].length; j++) {
        if (!visited[graph[curV][j]]) {
          res[graph[curV][j]] = curLen + 1;
          newQueue.push([graph[curV][j], curLen + 1]);
          visited[graph[curV][j]] = true;
        }
      }
    }
    queue = newQueue;
  }
  return res;
};