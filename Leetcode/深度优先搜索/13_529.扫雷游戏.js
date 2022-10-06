// 529. 扫雷游戏
// 让我们一起来玩扫雷游戏！

// 给你一个大小为 m x n 二维字符矩阵 board ，表示扫雷游戏的盘面，其中：

// 'M' 代表一个 未挖出的 地雷，
// 'E' 代表一个 未挖出的 空方块，
// 'B' 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的 已挖出的 空白方块，
// 数字（'1' 到 '8'）表示有多少地雷与这块 已挖出的 方块相邻，
// 'X' 则表示一个 已挖出的 地雷。
// 给你一个整数数组 click ，其中 click = [clickr, clickc] 表示在所有 未挖出的 方块（'M' 或者 'E'）中的下一个点击位置（clickr 是行下标，clickc 是列下标）。

// 根据以下规则，返回相应位置被点击后对应的盘面：

// 如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X' 。
// 如果一个 没有相邻地雷 的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的 未挖出 方块都应该被递归地揭露。
// 如果一个 至少与一个地雷相邻 的空方块（'E'）被挖出，修改它为数字（'1' 到 '8' ），表示相邻地雷的数量。
// 如果在此次点击中，若无更多方块可被揭露，则返回盘面。

// 示例 1：

// 输入：board = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0]
// 输出：[["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]
// 示例 2：

// 输入：board = [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]], click = [1,2]
// 输出：[["B","1","E","1","B"],["B","1","X","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]

/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  let m = board.length;
  if (m == 0) {
    return [];
  }
  let n = board[0].length;

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

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  function dfs(grid, x, y) {
    visited[x][y] = true;

    // 未挖出的空方块
    // 这里要看周围有没有地雷，如果没有改为B，如果有改为周围的地雷数
    if (grid[x][y] == 'E') {
      let mineCount = 0;

      // 先统计下周围有多少个地雷
      for (let i = 0; i < dirs.length; i++) {
        let nextX = x + dirs[i][0];
        let nextY = y + dirs[i][1];

        if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n) {
          if (grid[nextX][nextY] == 'M') {
            mineCount++;
          }
        }
      }

      // 周围没有地雷改为B， 有地雷改为地雷数
      if (mineCount == 0) {
        grid[x][y] = 'B';
      } else {
        grid[x][y] = mineCount + '';
      }

      // 对周围没有地雷的单元格再进行dfs
      if (grid[x][y] == 'B') {
        for (let i = 0; i < dirs.length; i++) {
          let nextX = x + dirs[i][0];
          let nextY = y + dirs[i][1];

          if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n) {
            if (grid[nextX][nextY] == 'E') {
              dfs(grid, nextX, nextY);
            }
          }
        }
      }
    }
  }

  // 点中地雷
  if (board[click[0]][click[1]] == 'M') {
    board[click[0]][click[1]] = 'X';
    return board;
  }

  dfs(board, click[0], click[1]);
  return board;
};


// 输入：
// [
//   ["B","1","E","1","B"],
//   ["B","1","M","1","B"],
//   ["B","1","1","1","B"],
//   ["B","B","B","B","B"]
// ]
// [1,2]
// 输出：
// [
//   ["B","1","E","1","B"],
//   ["B","1","M","1","B"],
//   ["B","1","1","1","B"],
//   ["B","B","B","B","B"]
// ]
// 预期结果：
// [
//   ["B","1","E","1","B"],
//   ["B","1","X","1","B"],
//   ["B","1","1","1","B"],
//   ["B","B","B","B","B"]
// ]