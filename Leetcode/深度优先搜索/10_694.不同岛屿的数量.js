// 694. 不同岛屿的数量
// 给定一个非空 01 二维数组表示的网格，一个岛屿由四连通（上、下、左、右四个方向）的 1 组成，你可以认为网格的四周被海水包围。

// 请你计算这个网格中共有多少个形状不同的岛屿。两个岛屿被认为是相同的，当且仅当一个岛屿可以通过平移变换（不可以旋转、翻转）和另一个岛屿重合。

// 示例 1：

// 11000
// 11000
// 00011
// 00011
// 给定上图，返回结果 1 。

// 示例 2：

// 11011
// 10000
// 00001
// 11011
// 给定上图，返回结果 3 。

// 注意：

// 11
// 1
// 和

//  1
// 11
// 是不同的岛屿，因为我们不考虑旋转、翻转操作。

// 提示：二维数组每维的大小都不会超过 50 。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
  let m = grid.length;
  if (m == 0) return 0;
  let n = grid[0].length;

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  // 以起点坐标为0, 0 记录下所有节点坐标的字符串放进set中
  let str = '';
  function dfs(grid, x, y, originX, originY) {
    visited[x][y] = true;
    str = str + (x - originX) + (y - originY);

    for (let i = 0; i < dirs.length; i++) {
      let nextI = x + dirs[i][0];
      let nextJ = y + dirs[i][1];

      if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ] && grid[nextI][nextJ] == 1) {
        dfs(grid, nextI, nextJ, originX, originY);
      }
    }
  }
  
  let set = new Set();
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1 && !visited[i][j]) {
        dfs(grid, i, j, i, j);
        if (!set.has(str)) {
          set.add(str);
          res++;
        }
        str = '';
      }
    }
  }
  return res;
};