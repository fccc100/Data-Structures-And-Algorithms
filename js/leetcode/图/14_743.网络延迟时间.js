// 743. 网络延迟时间
// 有 n 个网络节点，标记为 1 到 n。

// 给你一个列表 times，表示信号经过 有向 边的传递时间。 times[i] = (ui, vi, wi)，其中 ui 是源节点，vi 是目标节点， wi 是一个信号从源节点传递到目标节点的时间。

// 现在，从某个节点 K 发出一个信号。需要多久才能使所有节点都收到信号？如果不能使所有节点收到信号，返回 -1 。

// 示例 1：

// 输入：times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// 输出：2
// 示例 2：

// 输入：times = [[1,2,1]], n = 2, k = 1
// 输出：1
// 示例 3：

// 输入：times = [[1,2,1]], n = 2, k = 2
// 输出：-1

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = new Map();
  }

  for (let i = 0; i < times.length; i++) {
    graph[times[i][0] - 1].set(times[i][1] - 1, times[i][2]);
  }

  // Dijkstra
  let visited = Array(n).fill(false);

  let dis = Array(n).fill(Infinity);
  dis[k - 1] = 0;

  while (true) {
    let cur = -1;
    curDis = Infinity;

    // 找到当前离出发点最短的路径
    for (v = 0; v < n; v++) {
      if (!visited[v] && dis[v] < curDis) {
        curDis = dis[v];
        cur = v;
      }
    }

    if (cur == -1) break;

    visited[cur] = true;
    for (let [v, w] of graph[cur]) {
      if (!visited[v]) {
        if (dis[cur] + w < dis[v]) {
          dis[v] = dis[cur] + w;
        }
      }
    }
  }

  let max = -1;
  for (let i = 0; i < dis.length; i++) {
    max = Math.max(max, dis[i]);
  }

  return max == Infinity ? -1 : max;
};

// 再来一遍熟悉Dijkstra
var networkDelayTime = function(times, n, k) {
  let graph = Array(n);
  for (let i = 0; i < n; i++) {
    graph[i] = new Map();
  }

  for (let i = 0; i < times.length; i++) {
    graph[times[i][0] - 1].set(times[i][1] - 1, times[i][2]);
  }

  let visited = Array(n).fill(false);
  let dis = Array(n).fill(Infinity);

  dis[k - 1] = 0;

  while (true) {
    // 先找到当前路径最短的点
    let curDis = Infinity;
    let cur = -1;
    for (let v = 0; v < n; v++) {
      if (!visited[v]) {
        if (dis[v] < curDis) {
          curDis = dis[v];
          cur = v;
        }
      }
    }

    if (cur == -1) break;

    // 更新邻边距离
    visited[cur] = true;
    for (let [v, w] of graph[cur]) {
      if (!visited[v]) {
        if (dis[cur] + w < dis[v]) {
          dis[v] = dis[cur] + w;
        }
      }
    }
  }

  let max = -1;
  for (let i = 0; i < dis.length; i++) {
    max = Math.max(max, dis[i]);
  }
  return max == Infinity ? -1 : max;
}

// 3.使用优先队列优化的Dijkstra