// 1091. 二进制矩阵中的最短路径
// 给你一个 n x n 的二进制矩阵 grid 中，返回矩阵中最短 畅通路径 的长度。如果不存在这样的路径，返回 -1 。

// 二进制矩阵中的 畅通路径 是一条从 左上角 单元格（即，(0, 0)）到 右下角 单元格（即，(n - 1, n - 1)）的路径，该路径同时满足下述要求：

// 路径途经的所有单元格都的值都是 0 。
// 路径中所有相邻的单元格应当在 8 个方向之一 上连通（即，相邻两单元之间彼此不同且共享一条边或者一个角）。
// 畅通路径的长度 是该路径途经的单元格总数。

// 示例 1：

// 输入：grid = [[0,1],[1,0]]
// 输出：2
// 示例 2：

// 输入：grid = [[0,0,0],[1,1,0],[1,1,0]]
// 输出：4
// 示例 3：

// 输入：grid = [[1,0,0],[1,1,0],[1,1,0]]
// 输出：-1

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  let m = grid.length;
  if (m == 0) return 0;
  let n = grid[0].length;
  if (n == 0) return 0;

  if (grid[0][0] == 1) {
    return -1;
  }

  if (m == 1 && n == 1) {
    return 1;
  }

  let queue = [];
  queue.push([0, 0, 1]);

  // 记录访问过的节点
  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }
  visited[0][0] = true;

  const dirs = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1]
  ];

  // BFS
  while (queue.length) {
    let curPath = queue.shift();
    let x = curPath[0];
    let y = curPath[1];

    // 将当前节点的下一节点入队
    for (let i = 0; i < dirs.length; i++) {
      let nextX = x + dirs[i][0];
      let nextY = y + dirs[i][1];

      if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && grid[nextX][nextY] == 0 && !visited[nextX][nextY]) {
        queue.push([nextX, nextY, curPath[2] + 1]);
        visited[nextX][nextY] = true;
        if (nextX == m - 1 && nextY == n - 1) {
          return curPath[2] + 1;
        }
      }
    }
  }
  return -1;
};
