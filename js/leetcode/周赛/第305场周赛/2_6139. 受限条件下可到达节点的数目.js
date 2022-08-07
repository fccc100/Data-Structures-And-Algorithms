// 6139. 受限条件下可到达节点的数目 显示英文描述 
// 通过的用户数0
// 尝试过的用户数0
// 用户总通过次数0
// 用户总提交次数0
// 题目难度Medium
// 现有一棵由 n 个节点组成的无向树，节点编号从 0 到 n - 1 ，共有 n - 1 条边。

// 给你一个二维整数数组 edges ，长度为 n - 1 ，其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条边。
// 另给你一个整数数组 restricted 表示 受限 节点。

// 在不访问受限节点的前提下，返回你可以从节点 0 到达的 最多 节点数目。

// 注意，节点 0 不 会标记为受限节点。

// 示例 1：

// 输入：n = 7, edges = [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], restricted = [4,5]
// 输出：4
// 解释：上图所示正是这棵树。
// 在不访问受限节点的前提下，只有节点 [0,1,2,3] 可以从节点 0 到达。
// 示例 2：

// 输入：n = 7, edges = [[0,1],[0,2],[0,5],[0,4],[3,2],[6,5]], restricted = [4,2,1]
// 输出：3
// 解释：上图所示正是这棵树。
// 在不访问受限节点的前提下，只有节点 [0,5,6] 可以从节点 0 到达。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
// BFS， 能通过但是很慢
var reachableNodes = function (n, edges, restricted) {
  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  let visited = Array(n).fill(false);

  function bfs(v) {
    visited[v] = true;

    let queue = [];
    queue.push(v);

    let res = 0;
    while (queue.length) {
      let len = queue.length;
      let newQueue = [];

      for (let i = 0; i < len; i++) {
        let cur = queue[i];

        if (!restricted.includes(cur)) {
          res++;
        }

        for (let j = 0; j < graph[cur].length; j++) {
          if (!visited[graph[cur][j]] && !restricted.includes(graph[cur][j])) {
            visited[graph[cur][j]] = true;
            newQueue.push(graph[cur][j]);
          }
        }
      }
      queue = newQueue;
    }
    return res;
  }

  return bfs(0);
};

// 用set预处理受限节点，查询受限节点时间复杂度降为O(1)
var reachableNodes = function (n, edges, restricted) {
  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  let set = new Set();
  for (let i = 0; i < restricted.length; i++) {
    set.add(restricted[i]);
  }

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  let visited = Array(n).fill(false);

  function bfs(v) {
    visited[v] = true;

    let queue = [];
    queue.push(v);

    let res = 0;
    while (queue.length) {
      let len = queue.length;
      let newQueue = [];

      for (let i = 0; i < len; i++) {
        let cur = queue[i];

        if (!set.has(cur)) {
          res++;
        }

        for (let j = 0; j < graph[cur].length; j++) {
          if (!visited[graph[cur][j]] && !set.has(graph[cur][j])) {
            visited[graph[cur][j]] = true;
            newQueue.push(graph[cur][j]);
          }
        }
      }
      queue = newQueue;
    }
    return res;
  }

  return bfs(0);
}

// DFS
var reachableNodes = function (n, edges, restricted) {
  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  let set = new Set();
  for (let i = 0; i < restricted.length; i++) {
    set.add(restricted[i]);
  }

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  let visited = Array(n).fill(false);

  function dfs(v) {
    visited[v] = true;

    let res = 1;
    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]] && !set.has(graph[v][i])) {
        res += dfs(graph[v][i]);
      }
    }
    return res;
  }

  return dfs(0);
}