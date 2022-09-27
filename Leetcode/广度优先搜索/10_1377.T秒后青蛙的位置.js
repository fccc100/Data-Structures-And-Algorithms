// 1377. T 秒后青蛙的位置
// 给你一棵由 n 个顶点组成的无向树，顶点编号从 1 到 n。青蛙从 顶点 1 开始起跳。规则如下：

// 在一秒内，青蛙从它所在的当前顶点跳到另一个 未访问 过的顶点（如果它们直接相连）。
// 青蛙无法跳回已经访问过的顶点。
// 如果青蛙可以跳到多个不同顶点，那么它跳到其中任意一个顶点上的机率都相同。
// 如果青蛙不能跳到任何未访问过的顶点上，那么它每次跳跃都会停留在原地。
// 无向树的边用数组 edges 描述，其中 edges[i] = [fromi, toi] 意味着存在一条直接连通 fromi 和 toi 两个顶点的边。

// 返回青蛙在 t 秒后位于目标顶点 target 上的概率。

// 示例 1：

// 输入：n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 2, target = 4
// 输出：0.16666666666666666 
// 解释：上图显示了青蛙的跳跃路径。青蛙从顶点 1 起跳，第 1 秒 有 1/3 的概率跳到顶点 2 ，然后第 2 秒 有 1/2 的概率跳到顶点 4，因此青蛙在 2 秒后位于顶点 4 的概率是 1/3 * 1/2 = 1/6 = 0.16666666666666666 。 
// 示例 2：

// 输入：n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 1, target = 7
// 输出：0.3333333333333333
// 解释：上图显示了青蛙的跳跃路径。青蛙从顶点 1 起跳，有 1/3 = 0.3333333333333333 的概率能够 1 秒 后跳到顶点 7 。

var frogPosition = function (n, edges, t, target) {

  // 邻接表建图
  let graph = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    graph[edges[i][0]].push(edges[i][1]);
    graph[edges[i][1]].push(edges[i][0]);
  }

  let queue = [];
  queue.push([1, 0, 1]);

  let visited = Array(n).fill(false);
  visited[1] = true;

  // BFS
  while (queue.length) {
    let curPath = queue.shift();

    let curNode = curPath[0];
    let curTime = curPath[1];
    let v = curPath[2];
    if (curTime > t) {
      break;
    }

    if (curTime == t && curNode == target) {
      return v;
    }

    let len = graph[curNode].length;
    let m = 0;
    for (let i = 0; i < len; i++) {
      if (!visited[graph[curNode][i]]) {
        m++;
      }
    }

    // 没有未访问的相邻节点了
    if (m == 0) {
      queue.push([curNode, curTime + 1, v]);
    } else {

      // 相邻节点入队
      for (let i = 0; i < len; i++) {
        if (!visited[graph[curNode][i]]) {
          queue.push([graph[curNode][i], curTime + 1, v * (1 / m)]);
          visited[graph[curNode][i]] = true;
        }
      }
    }

  }
  return 0;
};


/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {

};