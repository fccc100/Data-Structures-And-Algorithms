// 886. 可能的二分法
// 给定一组 n 人（编号为 1, 2, ..., n）， 我们想把每个人分进任意大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。

// 给定整数 n 和数组 dislikes ，其中 dislikes[i] = [ai, bi] ，表示不允许将编号为 ai 和  bi的人归入同一组。当可以用这种方法将所有人分进两组时，返回 true；否则返回 false。

// 示例 1：

// 输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
// 输出：true
// 解释：group1 [1,4], group2 [2,3]
// 示例 2：

// 输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
// 输出：false
// 示例 3：

// 输入：n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
// 输出：false

/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
// 与检测二分图思路完全一样
var possibleBipartition = function(n, dislikes) {
  let graph = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < dislikes.length; i++) {
    graph[dislikes[i][0]].push(dislikes[i][1]);
    graph[dislikes[i][1]].push(dislikes[i][0]);
  }

  let visited = Array(n + 1).fill(false);
  let colors = Array(n + 1).fill(-1);

  function dfs(v, color) {
    visited[v] = true;
    colors[v] = color;

    for (let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {
        if (!dfs(graph[v][i], 1 - color)) {
          return false;
        }
      } else if (colors[v] == colors[graph[v][i]]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i <= n; i++) {
    if (!visited[i]) {
      if (!dfs(i, 0)) {
        return false;
      }
    }
  }
  return true;
};