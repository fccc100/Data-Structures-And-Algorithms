// 1293. 网格中的最短路径
// 给你一个 m * n 的网格，其中每个单元格不是 0（空）就是 1（障碍物）。每一步，您都可以在空白单元格中上、下、左、右移动。

// 如果您 最多 可以消除 k 个障碍物，请找出从左上角 (0, 0) 到右下角 (m-1, n-1) 的最短路径，并返回通过该路径所需的步数。如果找不到这样的路径，则返回 -1 。

// 示例 1：

// 输入： grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
// 输出：6
// 解释：
// 不消除任何障碍的最短路径是 10。
// 消除位置 (3,2) 处的障碍后，最短路径是 6 。该路径是 (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).
// 示例 2：

// 输入：grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
// 输出：-1
// 解释：我们至少需要消除两个障碍才能找到这样的路径。

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
  let m = grid.length;
  let n = grid[0].length;
  if (m == 1 && n == 1) {
    return 0;
  }

  if (grid[0][0] == 1) {
    return -1;
  }

  let dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];

  let queue = [];
  queue.push([0, 0, k]);

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(-1);
  }
  visited[0][0] = k;

  let res = 0;
  while (queue.length) {
    res++;
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curPath = queue.shift();

      let x = curPath[0];
      let y = curPath[1];

      for (let k = 0; k < dirs.length; k++) {
        let p = curPath[2];

        let nextI = x + dirs[k][0];
        let nextJ = y + dirs[k][1];
        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n) {
          if (nextI == m - 1 && nextJ == n - 1) {
            return res;
          }

          p = grid[nextI][nextJ] == 0 ? p : --p;

          if (p >= 0) {
            if (visited[nextI][nextJ] == -1 || (visited[nextI][nextJ] != -1 && p > visited[nextI][nextJ])) {
              queue.push([nextI, nextJ, p]);
              visited[nextI][nextJ] = p;
            }
          }
        }
      }
    }
  }
  return -1;
};




var numIslands2 = function(m, n, positions) {
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


  let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
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