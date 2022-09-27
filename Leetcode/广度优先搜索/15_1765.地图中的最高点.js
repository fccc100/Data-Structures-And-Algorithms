// 1765. 地图中的最高点
// 给你一个大小为 m x n 的整数矩阵 isWater ，它代表了一个由 陆地 和 水域 单元格组成的地图。

// 如果 isWater[i][j] == 0 ，格子 (i, j) 是一个 陆地 格子。
// 如果 isWater[i][j] == 1 ，格子 (i, j) 是一个 水域 格子。
// 你需要按照如下规则给每个单元格安排高度：

// 每个格子的高度都必须是非负的。
// 如果一个格子是 水域 ，那么它的高度必须为 0 。
// 任意相邻的格子高度差 至多 为 1 。当两个格子在正东、南、西、北方向上相互紧挨着，就称它们为相邻的格子。（也就是说它们有一条公共边）
// 找到一种安排高度的方案，使得矩阵中的最高高度值 最大 。

// 请你返回一个大小为 m x n 的整数矩阵 height ，其中 height[i][j] 是格子 (i, j) 的高度。如果有多种解法，请返回 任意一个 。

// 示例 1：

// 输入：isWater = [[0,1],[0,0]]
// 输出：[[1,0],[2,1]]
// 解释：上图展示了给各个格子安排的高度。
// 蓝色格子是水域格，绿色格子是陆地格。
// 示例 2：

// 输入：isWater = [[0,0,1],[1,0,0],[0,0,0]]
// 输出：[[1,1,0],[0,1,1],[1,2,2]]
// 解释：所有安排方案中，最高可行高度为 2 。
// 任意安排方案中，只要最高高度为 2 且符合上述规则的，都为可行方案。

/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
// 与286.墙与门一样，从所有水域开始进行BFS
// js模拟队列的shift操作是O(n)的，所以本题会超时
var highestPeak = function(isWater) {
  let m = isWater.length;
  if (m == 0) return [];
  let n = isWater[0].length;

  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j] == 1) {
        isWater[i][j] = -1;
        queue.push([i, j, 0]);
      }
    }
  }

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curPath = queue.shift();
      let curI = curPath[0];
      let curJ = curPath[1];
      let curDis = curPath[2];

      for (j = 0; j < dirs.length; j++) {
        let nextI = curI + dirs[j][0];
        let nextJ = curJ + dirs[j][1];

        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && isWater[nextI][nextJ] == 0) {
          isWater[nextI][nextJ] = curDis + 1;
          queue.push([nextI, nextJ, curDis + 1]);
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j] == -1) {
        isWater[i][j] = 0;
      }
    }
  }
  return isWater;
};

// 2.将shift操作改成使用一个新队列
// 优化后可以通过
var highestPeak = function(isWater) {
  let m = isWater.length;
  if (m == 0) return [];
  let n = isWater[0].length;

  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j] == 1) {
        isWater[i][j] = -1;
        queue.push([i, j, 0]);
      }
    }
  }

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  while (queue.length) {
    let len = queue.length;
    let newQueue = [];

    for (let i = 0; i < len; i++) {
      let curPath = queue[i];
      let curI = curPath[0];
      let curJ = curPath[1];
      let curDis = curPath[2];

      for (j = 0; j < dirs.length; j++) {
        let nextI = curI + dirs[j][0];
        let nextJ = curJ + dirs[j][1];

        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && isWater[nextI][nextJ] == 0) {
          isWater[nextI][nextJ] = curDis + 1;
          newQueue.push([nextI, nextJ, curDis + 1]);
        }
      }
    }
    queue = newQueue;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isWater[i][j] == -1) {
        isWater[i][j] = 0;
      }
    }
  }
  return isWater;
};