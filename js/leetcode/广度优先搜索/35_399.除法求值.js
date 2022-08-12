// 399. 除法求值
// 给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i] 。
// 每个 Ai 或 Bi 是一个表示单个变量的字符串。

// 另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。

// 返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 -1.0 替代这个答案。

// 注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。

// 示例 1：

// 输入：equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// 输出：[6.00000,0.50000,-1.00000,1.00000,-1.00000]
// 解释：
// 条件：a / b = 2.0, b / c = 3.0
// 问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
// 结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
// 示例 2：

// 输入：equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// 输出：[3.75000,0.40000,5.00000,0.20000]
// 示例 3：

// 输入：equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// 输出：[0.50000,2.00000,-1.00000,-1.00000]

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  let strToIdMap = new Map();
  let id = 0;
  for (let i = 0; i < equations.length; i++) {
    if (!strToIdMap.has(equations[i][0])) {
      strToIdMap.set(equations[i][0], id);
      id++;
    }
    if (!strToIdMap.has(equations[i][1])) {
      strToIdMap.set(equations[i][1], id);
      id++;
    }
  }

  // 邻接表
  let n = strToIdMap.size;
  let graph = Array(n);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = new Map();
  }

  for (let i = 0; i < equations.length; i++) {
    graph[strToIdMap.get(equations[i][0])].set(strToIdMap.get(equations[i][1]), values[i]);
    graph[strToIdMap.get(equations[i][1])].set(strToIdMap.get(equations[i][0]), 1 / values[i]);
  }

  // BFS，计算从点v出发到达target的值
  function bfs(v, target) {
    let queue = [];
    let visited = Array(n).fill(false);
    queue.push([v, 1]);
    visited[v] = true;

    while (queue.length) {
      let len = queue.length;
      let newQueue = [];

      for (let i = 0; i < len; i++) {
        let curPath = queue[i];
        let curV = curPath[0];
        let curVal = curPath[1];

        for (let [nextV, w] of graph[curV]) {
          if (nextV == target) {
            return curVal * w;
          }
          if (!visited[nextV]) {
            newQueue.push([nextV, curVal * w]);
            visited[nextV] = true;
          }
        }
      }
      queue = newQueue;
    }
    return -1;
  }

  let res = [];
  for (let i = 0; i < queries.length; i++) {
    if (!strToIdMap.has(queries[i][0]) || !strToIdMap.has(queries[i][1])) {
      res[i] = -1;
      continue;
    }
    res[i] = bfs(strToIdMap.get(queries[i][0]), strToIdMap.get(queries[i][1]));
  }
  return res;
};