// 1020. 飞地的数量
// 给你一个大小为 m x n 的二进制矩阵 grid ，其中 0 表示一个海洋单元格、1 表示一个陆地单元格。

// 一次 移动 是指从一个陆地单元格走到另一个相邻（上、下、左、右）的陆地单元格或跨过 grid 的边界。

// 返回网格中 无法 在任意次数的移动中离开网格边界的陆地单元格的数量。

// 示例 1：

// 输入：grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
// 输出：3
// 解释：有三个 1 被 0 包围。一个 1 没有被包围，因为它在边界上。
// 示例 2：

// 输入：grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
// 输出：0
// 解释：所有 1 都在边界上或可以到达边界。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let m = grid.length;
  if (m == 0) return 0;
  let n = grid[0].length;

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  // dfs，统计总共有多少个可以与边界连接的1，最终用1的总和减去这个值就是答案飞地的数量
  let res = 0;
  function dfs(grid, i, j) {
    visited[i][j] = true;
    res++;

    for (let k = 0; k < dirs.length; k++) {
      let nextI = i + dirs[k][0];
      let nextJ = j + dirs[k][1];

      if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ] && grid[nextI][nextJ] == 1) {
        dfs(grid, nextI, nextJ);
      }
    }
  }

  // 求所有1的单元格的个数和能连接到边的1的个数
  let sum = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        sum++;
      }

      // 对四周的值为1的单元格进行DFS，统计个数
      if ((i == 0 || j == 0 || i == m - 1 || j == n - 1) && !visited[i][j] && grid[i][j] == 1) {
        dfs(grid, i, j);
      }
    }
  }

  return sum - res;
};