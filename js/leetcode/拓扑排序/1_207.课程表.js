// 207. 课程表
// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

// 示例 1：

// 输入：numCourses = 2, prerequisites = [[1,0]]
// 输出：true
// 解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
// 示例 2：

// 输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
// 输出：false
// 解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

  // 邻接表建图
  let graph = Array(numCourses);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }

  // degree记录每个节点的入度
  let degree = Array(numCourses).fill(0);
  for (let i = 0; i < prerequisites.length; i++) {
    graph[prerequisites[i][1]].push(prerequisites[i][0]);
    degree[prerequisites[i][0]]++;
  }

  // BFS
  let queue = [];
  let res = [];
  for (let i = 0; i < degree.length; i++) {
    if (degree[i] == 0) {
      queue.push(i);
    }
  }

  while(queue.length) {
    let cur = queue.shift();

    res.push(cur);
    for (let i = 0; i < graph[cur].length; i++) {
      // 遍历到相邻节点，删边，入度减1
      degree[graph[cur][i]]--;

      // 入度为0了，加入队列
      if (degree[graph[cur][i]] == 0) {
        queue.push(graph[cur][i]);
      }
    }
  }

  return res.length == numCourses;
};