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

// class UnionFind {
//   constructor(size) {
//     this.parent = Array(size);
//     for (let i = 0; i < size; i++) {
//       this.parent[i] = i;
//     }
//   }

//   find(p) {
//     while (p != this.parent[p]) {
//       p = this.parent[p];
//     }
//     return p;
//   }

//   isConnected(p, q) {
//     return this.find(p) == this.find(q);
//   }

//   union(p, q) {
//     let pRoot = this.find(p);
//     let qRoot = this.find(q);
//     if (pRoot == qRoot) {
//       return;
//     }
//     this.parent[pRoot] = qRoot;
//   }

//   getComponent(v) {
//     let parent = this.find(v);
//     let res = new Set();

//     for (let i = 0; i < this.parent.length; i++) {
//       if (this.find(i) == parent) {
//         res.add(i);
//       }
//     }
//     return res;
//   }
// }

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var distanceToCycle = function(n, edges) {
  // 建图
  // let graph = Array(n);
  // for (let i = 0; i < n; i++) {
  //   graph[i] = [];
  // }

  // for (let i = 0; i < edges.length; i++) {
  //   graph[edges[i][0]].push(edges[i][1]);
  //   graph[edges[i][1]].push(edges[i][0]);
  // }

  // // 求环
  // let cycleSet = null;
  
  // let dfsVisited = Array(n).fill(false);
  // let pre = Array(n).fill(0);

  // function dfs(v, preNode) {
  //   dfsVisited[v] = true;

  //   for (let i = 0; i < graph[v].length; i++) {
  //     if (!visited[graph[v][i]]) {
  //       dfs(graph[v][i], v);
  //     } else if (graph[v][i] != preNode) {

  //     }
  //   }
  // }


  // dfs(0, 0);

  // let visited = Array(n).fill(false);

  // let res = Array(n).fill(0);

  // // BFS求路径
  // let queue = [];
  // for (let v of cycleSet) {
  //   queue.push([v, 0]);
  //   visited[v] = true;
  // }

  // while (queue.length) {
  //   let len = queue.length;

  //   for (let i = 0; i < len; i++) {
  //     let curPath = queue.shift();
  //     let curV = curPath[0];
  //     let curLen = curPath[1];

  //     for (let j = 0; j < graph[curV].length; j++) {
  //       if (!visited[graph[curV][j]]) {
  //         res[graph[curV][j]] = curLen + 1;
  //         queue.push([graph[curV][j], curLen + 1]);
  //         visited[graph[curV][j]] = true;
  //       }
  //     }
  //   }
  // }
  // return res;
};