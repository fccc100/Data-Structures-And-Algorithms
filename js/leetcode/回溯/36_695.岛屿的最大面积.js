// 695. 岛屿的最大面积
// 给你一个大小为 m x n 的二进制矩阵 grid 。

// 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 岛屿的面积是岛上值为 1 的单元格的数目。

// 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

// 示例 1：
// 输入：grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 输出：6
// 解释：答案不应该是 11 ，因为岛屿只能包含水平或垂直这四个方向上的 1 。

function maxAreaOfIsland(grid) {
  let m = grid.length;
  if (m == 0) return 0;
  let n = grid[0].length;
  let res = 0;
  let visited = [];
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }
  let isLandCount = 0;

  // 四个方向
  let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  function dfs(grid, i, j) {
    // 统计岛屿数量
    isLandCount++;

    visited[i][j] = true;
    for (let k = 0; k < 4; k++) {
      let newI = i + dirs[k][0];
      let newJ = j + dirs[k][1];
      // 如果四个方向没有出界并且是没访问过的岛屿，继续递归
      if (newI >= 0 && newI < m && newJ >= 0 && newJ < n && !visited[newI][newJ] && grid[newI][newJ] == 1) {
        dfs(grid, newI, newJ);
      }
    }
  }
  
  // 从每个起点出发统计岛屿并记录岛屿最大面积
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1 && !visited[i][j]) {
        dfs(grid, i, j);
        res = Math.max(res, isLandCount);
        isLandCount = 0;
      }
    }
  }
  return res;
}