// 1905. 统计子岛屿
// 给你两个 m x n 的二进制矩阵 grid1 和 grid2 ，它们只包含 0 （表示水域）和 1 （表示陆地）。
// 一个 岛屿 是由 四个方向 （水平或者竖直）上相邻的 1 组成的区域。任何矩阵以外的区域都视为水域。

// 如果 grid2 的一个岛屿，被 grid1 的一个岛屿 完全 包含，也就是说 grid2 中该岛屿的每一个格子都被 grid1 中同一个岛屿完全包含，那么我们称 grid2 中的这个岛屿为 子岛屿 。

// 请你返回 grid2 中 子岛屿 的 数目 。

// 示例 1：

// 输入：grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
// 输出：3
// 解释：如上图所示，左边为 grid1 ，右边为 grid2 。
// grid2 中标红的 1 区域是子岛屿，总共有 3 个子岛屿。
// 示例 2：

// 输入：grid1 = [[1,0,1,0,1],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[1,0,1,0,1]], grid2 = [[0,0,0,0,0],[1,1,1,1,1],[0,1,0,1,0],[0,1,0,1,0],[1,0,0,0,1]]
// 输出：2 
// 解释：如上图所示，左边为 grid1 ，右边为 grid2 。
// grid2 中标红的 1 区域是子岛屿，总共有 2 个子岛屿。

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  let m = grid2.length;
  if (m == 0) return 0;
  let n = grid2[0].length;

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  // 广度优先遍历，返回是否每个1都在grid1中对应的位置也为1
  function bfs(x, y) {

    visited[x][y] = true;

    let queue = [];
    queue.push([x, y]);

    let res = true;
    while (queue.length) {
      let len = queue.length;

      for (let i = 0; i < len; i++) {
        let curPos = queue.shift();
        let curI = curPos[0];
        let curJ = curPos[1];

        for (let j = 0; j < dirs.length; j++) {
          let nextI = curI + dirs[j][0];
          let nextJ = curJ + dirs[j][1];

          if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ]) {
            if (grid2[nextI][nextJ] == 1 && grid1[nextI][nextJ] != 1) {
              res = false;
            }
            if (grid2[nextI][nextJ] == 1) {
              queue.push([nextI, nextJ]);
              visited[nextI][nextJ] = true;
            }
          }
        }
      }
    }

    return res && grid1[x][y] == 1;
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] == 1 && !visited[i][j]) {
        if (bfs(i, j)) {
          res++;
        }
      }
    }
  }
  return res;
};


var countSubIslands = function (grid1, grid2) {
  let m = grid2.length;
  if (m == 0) return 0;
  let n = grid2[0].length;

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  function bfs(x, y) {

    visited[x][y] = true;

    let queue = [];
    queue.push([x, y]);

    let res = true;
    while (queue.length) {
      let len = queue.length;
      let newQueue = [];

      for (let i = 0; i < len; i++) {
        let curPos = queue[i];
        let curI = curPos[0];
        let curJ = curPos[1];

        for (let j = 0; j < dirs.length; j++) {
          let nextI = curI + dirs[j][0];
          let nextJ = curJ + dirs[j][1];

          if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ]) {
            if (grid2[nextI][nextJ] == 1 && grid1[nextI][nextJ] != 1) {
              res = false;
            }
            if (grid2[nextI][nextJ] == 1) {
              newQueue.push([nextI, nextJ]);
              visited[nextI][nextJ] = true;
            }
          }
        }
      }
      queue = newQueue;
    }

    return res && grid1[x][y] == 1;
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] == 1 && !visited[i][j]) {
        if (bfs(i, j)) {
          res++;
        }
      }
    }
  }
  return res;
};

// [
//   [1,1,1,1,0,0],
//   [1,1,0,1,0,0],
//   [1,0,0,1,1,1],
//   [1,1,1,0,0,1],
//   [1,1,1,1,1,0],
//   [1,0,1,0,1,0],
//   [0,1,1,1,0,1],
//   [1,0,0,0,1,1],
//   [1,0,0,0,1,0],
//   [1,1,1,1,1,0]
// ]
// [
//   [1,1,1,1,0,1],
//   [0,0,1,0,1,0],
//   [1,1,1,1,1,1],
//   [0,1,1,1,1,1],
//   [1,1,1,0,1,0],
//   [0,1,1,1,1,1],
//   [1,1,0,1,1,1],
//   [1,0,0,1,0,1],
//   [1,1,1,1,1,1],
//   [1,0,0,1,0,0]
// ]