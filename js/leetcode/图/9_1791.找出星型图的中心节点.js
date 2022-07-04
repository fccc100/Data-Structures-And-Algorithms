// 1791. 找出星型图的中心节点
// 有一个无向的 星型 图，由 n 个编号从 1 到 n 的节点组成。星型图有一个 中心 节点，并且恰有 n - 1 条边将中心节点与其他每个节点连接起来。

// 给你一个二维整数数组 edges ，其中 edges[i] = [ui, vi] 表示在节点 ui 和 vi 之间存在一条边。请你找出并返回 edges 所表示星型图的中心节点。

// 示例 1：

// 输入：edges = [[1,2],[2,3],[4,2]]
// 输出：2
// 解释：如上图所示，节点 2 与其他每个节点都相连，所以节点 2 是中心节点。
// 示例 2：

// 输入：edges = [[1,2],[5,1],[1,3],[1,4]]
// 输出：1

/**
 * @param {number[][]} edges
 * @return {number}
 */
// 找每条边都有的顶点
var findCenter = function(edges) {
  // 邻接表建图
  let n = edges.length + 2;
  let graph = Array(n);

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  for (let i = 1; i < n; i++) {
    if (graph[i].length == n - 2) {
      return i;
    }
  }
  return -1;
};

// 直接找边中相等的顶点
var findCenter = function(edges) {
  return edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1] ? edges[0][0] : edges[0][1];
}