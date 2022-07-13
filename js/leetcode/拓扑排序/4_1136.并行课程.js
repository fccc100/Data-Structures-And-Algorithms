// 1136. 并行课程
// 给你一个整数 n ，表示编号从 1 到 n 的 n 门课程。另给你一个数组 relations ，其中 relations[i] = [prevCoursei, nextCoursei] ，
// 表示课程 prevCoursei 和课程 nextCoursei 之间存在先修关系：课程 prevCoursei 必须在 nextCoursei 之前修读完成。

// 在一个学期内，你可以学习 任意数量 的课程，但前提是你已经在上一学期修读完待学习课程的所有先修课程。

// 请你返回学完全部课程所需的 最少 学期数。如果没有办法做到学完全部这些课程的话，就返回 -1。

// 示例 1：

// 输入：n = 3, relations = [[1,3],[2,3]]
// 输出：2
// 解释：上图表示课程之间的关系图：
// 在第一学期，可以修读课程 1 和 2 。
// 在第二学期，可以修读课程 3 。
// 示例 2：


// 输入：n = 3, relations = [[1,2],[2,3],[3,1]]
// 输出：-1
// 解释：没有课程可以学习，因为它们互为先修课程。

/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
// 与207.课程表大致一样，稍有改动
var minimumSemesters = function(n, relations) {
  // 邻接表建图
  let graph = Array(n + 1);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }

  let degree = Array(n + 1).fill(0);
  for (let i = 0; i < relations.length; i++) {
    graph[relations[i][0]].push(relations[i][1]);
    degree[relations[i][1]]++;
  }

  let queue = [];
  for (let i = 1; i < degree.length; i++) {
    if (degree[i] == 0) {
      queue.push(i);
    }
  }

  let path = [];
  let res = 0;
  while(queue.length) {
    // 这里与207.课程表不一样的是需要记录队列长度一次遍历掉，因为此时队列里这些课都是可以在一个学期学完的
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();

      path.push(cur);
      for (let j = 0; j < graph[cur].length; j++) {
        degree[graph[cur][j]]--;

        if (degree[graph[cur][j]] == 0) {
          queue.push(graph[cur][j]);
        }
      }
    }
    res++;
  }

  if (path.length == n) {
    return res;
  }
  return -1;
};