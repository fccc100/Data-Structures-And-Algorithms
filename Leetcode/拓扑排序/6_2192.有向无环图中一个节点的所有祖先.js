// 2192. 有向无环图中一个节点的所有祖先
// 给你一个正整数 n ，它表示一个 有向无环图 中节点的数目，节点编号为 0 到 n - 1 （包括两者）。

// 给你一个二维整数数组 edges ，其中 edges[i] = [fromi, toi] 表示图中一条从 fromi 到 toi 的单向边。

// 请你返回一个数组 answer，其中 answer[i]是第 i 个节点的所有 祖先 ，这些祖先节点 升序 排序。

// 如果 u 通过一系列边，能够到达 v ，那么我们称节点 u 是节点 v 的 祖先 节点。

// 示例 1：

// 输入：n = 8, edgeList = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]
// 输出：[[],[],[],[0,1],[0,2],[0,1,3],[0,1,2,3,4],[0,1,2,3]]
// 解释：
// 上图为输入所对应的图。
// - 节点 0 ，1 和 2 没有任何祖先。
// - 节点 3 有 2 个祖先 0 和 1 。
// - 节点 4 有 2 个祖先 0 和 2 。
// - 节点 5 有 3 个祖先 0 ，1 和 3 。
// - 节点 6 有 5 个祖先 0 ，1 ，2 ，3 和 4 。
// - 节点 7 有 4 个祖先 0 ，1 ，2 和 3 。
// 示例 2：

// 输入：n = 5, edgeList = [[0,1],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// 输出：[[],[0],[0,1],[0,1,2],[0,1,2,3]]
// 解释：
// 上图为输入所对应的图。
// - 节点 0 没有任何祖先。
// - 节点 1 有 1 个祖先 0 。
// - 节点 2 有 2 个祖先 0 和 1 。
// - 节点 3 有 3 个祖先 0 ，1 和 2 。
// - 节点 4 有 4 个祖先 0 ，1 ，2 和 3 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
// 用set记录,超时
var getAncestors = function (n, edges) {

  // 邻接表建图
  let res = Array(n);
  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
    res[i] = new Set();
  }
  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
  }


  function dfs(v, parent) {

    for (let i = 0; i < parent.length; i++) {
      if (v != parent[i]) {
        res[v].add(parent[i]);
      }
    }
    for (let i = 0; i < graph[v].length; i++) {
      parent.push(v);
      dfs(graph[v][i], parent);
      parent.pop();
    }
  }

  for (let i = 0; i < n; i++) {
    dfs(i, [i]);
  }

  for (let i = 0; i < res.length; i++) {
    res[i] = [...res[i]];
    res[i].sort((a, b) => a - b);
  }
  return res;
};

// 2.拓扑排序
var getAncestors = function (n, edges) {
  let res = Array(n);

  // 邻接表建图
  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
    res[i] = new Set();
  }

  // 记录每个点的入度
  let degree = Array(n).fill(0);
  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    degree[edges[i][1]]++;
  }

  let queue = [];
  for (let i = 0; i < degree.length; i++) {
    if (degree[i] == 0) {
      queue.push(i);
    }
  }

  // BFS
  while(queue.length) {
    let cur = queue.shift();

    for (let i = 0; i < graph[cur].length; i++) {
      degree[graph[cur][i]]--;

      // 遍历到每个节点时，当前节点父节点的所有父节点都是自己的父节点，拷过来
      for (let key of res[cur]) {
        if (!res[graph[cur][i]].has(key)) {
          res[graph[cur][i]].add(key);
        }
      }
      // 再把父节点加进来
      if (!res[graph[cur][i]].has(cur)) {
        res[graph[cur][i]].add(cur);
      }

      if (degree[graph[cur][i]] == 0) {
        queue.push(graph[cur][i]);
      }
    }
  }
  
  // set转数组
  for (let i = 0; i < res.length; i++) {
    res[i] = [...res[i]];
    res[i].sort((a, b) => a - b);
  }
  return res;
}