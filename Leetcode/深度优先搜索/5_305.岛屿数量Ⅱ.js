// 305. 岛屿数量 II
// 给你一个大小为 m x n 的二进制网格 grid 。网格表示一个地图，其中，0 表示水，1 表示陆地。最初，grid 中的所有单元格都是水单元格（即，所有单元格都是 0）。

// 可以通过执行 addLand 操作，将某个位置的水转换成陆地。给你一个数组 positions ，其中 positions[i] = [ri, ci] 是要执行第 i 次操作的位置 (ri, ci) 。

// 返回一个整数数组 answer ，其中 answer[i] 是将单元格 (ri, ci) 转换为陆地后，地图中岛屿的数量。

// 岛屿 的定义是被「水」包围的「陆地」，通过水平方向或者垂直方向上相邻的陆地连接而成。你可以假设地图网格的四边均被无边无际的「水」所包围。

// 示例 1：

// 输入：m = 3, n = 3, positions = [[0,0],[0,1],[1,2],[2,1]]
// 输出：[1,1,2,3]
// 解释：
// 起初，二维网格 grid 被全部注入「水」。（0 代表「水」，1 代表「陆地」）
// - 操作 #1：addLand(0, 0) 将 grid[0][0] 的水变为陆地。此时存在 1 个岛屿。
// - 操作 #2：addLand(0, 1) 将 grid[0][1] 的水变为陆地。此时存在 1 个岛屿。
// - 操作 #3：addLand(1, 2) 将 grid[1][2] 的水变为陆地。此时存在 2 个岛屿。
// - 操作 #4：addLand(2, 1) 将 grid[2][1] 的水变为陆地。此时存在 3 个岛屿。
// 示例 2：

// 输入：m = 1, n = 1, positions = [[0,0]]
// 输出：[1]


// 直接对每次修改做dfs计算，勉强通过
var numIslands2 = function (m, n, positions) {
  let grid = Array(m);
  for (let i = 0; i < m; i++) {
    grid[i] = Array(n).fill(0);
  }

  let res = [];
  for (let i = 0; i < positions.length; i++) {
    grid[positions[i][0]][positions[i][1]] = 1;

    let temp = Array(m);
    for (let i = 0; i < m; i++) {
      temp[i] = grid[i].slice();
    }

    res.push(getIslandCount(temp));
  }

  return res;
};

// 求岛屿数量
function getIslandCount(grid) {
  let m = grid.length;
  let n = grid[0].length;


  let dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];

  function dfs(grid, i, j) {
    grid[i][j] = 2;

    for (let k = 0; k < dirs.length; k++) {
      let nextI = i + dirs[k][0];
      let nextJ = j + dirs[k][1];

      if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && grid[nextI][nextJ] == 1) {
        dfs(grid, nextI, nextJ);
      }
    }
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        res++;
        dfs(grid, i, j);
      }
    }
  }
  return res;
}