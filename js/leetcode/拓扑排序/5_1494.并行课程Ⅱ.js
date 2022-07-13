// 1494. 并行课程 II
// 给你一个整数 n 表示某所大学里课程的数目，编号为 1 到 n ，数组 dependencies 中， dependencies[i] = [xi, yi]  表示一个先修课的关系，也就是课程 xi 必须在课程 yi 之前上。同时你还有一个整数 k 。

// 在一个学期中，你 最多 可以同时上 k 门课，前提是这些课的先修课在之前的学期里已经上过了。

// 请你返回上完所有课最少需要多少个学期。题目保证一定存在一种上完所有课的方式。

// 示例 1：

// 输入：n = 4, dependencies = [[2,1],[3,1],[1,4]], k = 2
// 输出：3 
// 解释：上图展示了题目输入的图。在第一个学期中，我们可以上课程 2 和课程 3 。然后第二个学期上课程 1 ，第三个学期上课程 4 。
// 示例 2：

// 输入：n = 5, dependencies = [[2,1],[3,1],[4,1],[1,5]], k = 2
// 输出：4 
// 解释：上图展示了题目输入的图。一个最优方案是：第一学期上课程 2 和 3，第二学期上课程 4 ，第三学期上课程 1 ，第四学期上课程 5 。
// 示例 3：

// 输入：n = 11, dependencies = [], k = 2
// 输出：6

/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number} k
 * @return {number}
 */
// 本题不能使用如下拓扑排序
var minNumberOfSemesters = function (n, relations, k) {
  // 邻接表建图
  // let graph = Array(n + 1);
  // for (let i = 0; i < graph.length; i++) {
  //   graph[i] = [];
  // }

  // let degree = Array(n + 1).fill(0);
  // for (let i = 0; i < relations.length; i++) {
  //   graph[relations[i][0]].push(relations[i][1]);
  //   degree[relations[i][1]]++;
  // }

  // let queue = [];
  // for (let i = 1; i < degree.length; i++) {
  //   if (degree[i] == 0) {
  //     queue.push(i);
  //   }
  // }

  // let path = [];
  // let res = 0;
  // while (queue.length) {
  //   // 这里与207.课程表不一样的是需要记录队列长度一次遍历掉，因为此时队列里这些课都是可以在一个学期学完的
  //   let len = queue.length;
  //   for (let i = 0; i < Math.min(len, k); i++) {
  //     let cur = queue.shift();

  //     path.push(cur);
  //     for (let j = 0; j < graph[cur].length; j++) {
  //       degree[graph[cur][j]]--;

  //       if (degree[graph[cur][j]] == 0) {
  //         queue.push(graph[cur][j]);
  //       }
  //     }
  //   }
  //   res++;
  // }

  // if (path.length == n) {
  //   return res;
  // }
  // return -1;
};