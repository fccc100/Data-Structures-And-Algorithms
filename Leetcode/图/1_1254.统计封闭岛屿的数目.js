// 1254. 统计封闭岛屿的数目
// 二维矩阵 grid 由 0 （土地）和 1 （水）组成。岛是由最大的4个方向连通的 0 组成的群，封闭岛是一个 完全 由1包围（左、上、右、下）的岛。

// 请返回 封闭岛屿 的数目。

// 示例 1：

// 输入：grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
// 输出：2
// 解释：
// 灰色区域的岛屿是封闭岛屿，因为这座岛屿完全被水域包围（即被 1 区域包围）。
// 示例 2：

// 输入：grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
// 输出：1
// 示例 3：

// 输入：grid = [[1,1,1,1,1,1,1],
//              [1,0,0,0,0,0,1],
//              [1,0,1,1,1,0,1],
//              [1,0,1,0,1,0,1],
//              [1,0,1,1,1,0,1],
//              [1,0,0,0,0,0,1],
//              [1,1,1,1,1,1,1]]
// 输出：2

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let m = grid.length;
  if (!m) return 0;
  let n = grid[0].length;

  let cur = 0;

  function dfs(grid, i, j) {
    if (i < 0 || i == m || j < 0 || j == n) {
      cur = 0;
      return;
    }

    if (grid[i][j] != 0) return;
    grid[i][j] = 1;
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 0) {
        cur = 1;
        dfs(grid, i, j);
        res += cur;
      }
    }
  }
  return res;
};