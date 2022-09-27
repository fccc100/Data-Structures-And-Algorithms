// 剑指 Offer II 105. 岛屿的最大面积
// 给定一个由 0 和 1 组成的非空二维数组 grid ，用来表示海洋岛屿地图。

// 一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 找到给定的二维数组中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

// 示例 1:
// 输入: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// 输出: 6
// 解释: 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

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

  let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  function dfs(grid, i, j) {
    isLandCount++;

    visited[i][j] = true;
    for (let k = 0; k < 4; k++) {
      let newI = i + dirs[k][0];
      let newJ = j + dirs[k][1];
      if (newI >= 0 && newI < m && newJ >= 0 && newJ < n && !visited[newI][newJ] && grid[newI][newJ] == 1) {
        dfs(grid, newI, newJ);
      }
    }
  }
  
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