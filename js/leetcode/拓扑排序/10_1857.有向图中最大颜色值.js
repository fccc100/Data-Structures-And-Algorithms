// 1857. 有向图中最大颜色值
// 给你一个 有向图 ，它含有 n 个节点和 m 条边。节点编号从 0 到 n - 1 。

// 给你一个字符串 colors ，其中 colors[i] 是小写英文字母，表示图中第 i 个节点的 颜色 （下标从 0 开始）。同时给你一个二维数组 edges ，其中 edges[j] = [aj, bj] 表示从节点 aj 到节点 bj 有一条 有向边 。

// 图中一条有效 路径 是一个点序列 x1 -> x2 -> x3 -> ... -> xk ，对于所有 1 <= i < k ，从 xi 到 xi+1 在图中有一条有向边。路径的 颜色值 是路径中 出现次数最多 颜色的节点数目。

// 请你返回给定图中有效路径里面的 最大颜色值 。如果图中含有环，请返回 -1 。

// 示例 1：

// 输入：colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]
// 输出：3
// 解释：路径 0 -> 2 -> 3 -> 4 含有 3 个颜色为 "a" 的节点（上图中的红色节点）。
// 示例 2：

// 输入：colors = "a", edges = [[0,0]]
// 输出：-1
// 解释：从 0 到 0 有一个环。

/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function (colors, edges) {
  let n = colors.length;
  let graph = Array(n);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = new Set();
  }

  let degree = Array(n).fill(0);
  for (let i = 0; i < edges.length; i++) {
    if (edges[i][0] == edges[i][1]) return -1;
    graph[edges[i][0]].add(edges[i][1]);
    degree[edges[i][1]]++;
  }

  let res = 0;
  // dp[i][j]表示以i节点结尾的路径中，颜色为j的节点个数最大值
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(26).fill(0);
  }

  let queue = [];
  for (let i = 0; i < degree.length; i++) {
    if (degree[i] == 0) {
      dp[i][colors[i].charCodeAt() - 'a'.charCodeAt()] = 1;
      res = 1;
      queue.push(i);
    }
  }

  if (queue.length == 0) return -1;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curV = queue.shift();

      for (let w of graph[curV]) {
        degree[w]--;

        for (let j = 0; j < 26; j++) {
          dp[w][j] = Math.max(dp[w][j], dp[curV][j] + ((colors[w].charCodeAt() - 'a'.charCodeAt() == j ? 1 : 0)));
          res = Math.max(res, dp[w][j]);
        }
        if (degree[w] == 0) {

          queue.push(w);
        }
      }
    }
  }

  for (let i = 0; i < degree.length; i++) {
    if (degree[i] != 0) {
      return -1;
    }
  }
  return res;
};