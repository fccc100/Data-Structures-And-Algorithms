// 1730. 获取食物的最短路径
// 你现在很饿，想要尽快找东西吃。你需要找到最短的路径到达一个食物所在的格子。

// 给定一个 m x n 的字符矩阵 grid ，包含下列不同类型的格子：

// '*' 是你的位置。矩阵中有且只有一个 '*' 格子。
// '#' 是食物。矩阵中可能存在多个食物。
// 'O' 是空地，你可以穿过这些格子。
// 'X' 是障碍，你不可以穿过这些格子。
// 返回你到任意食物的最短路径的长度。如果不存在你到任意食物的路径，返回 -1。

// 示例 1:

// 输入： grid = [["X","X","X","X","X","X"],["X","*","O","O","O","X"],["X","O","O","#","O","X"],["X","X","X","X","X","X"]]
// 输出： 3
// 解释： 要拿到食物，你需要走 3 步。
// Example 2:

// 输入： grid = [["X","X","X","X","X"],["X","*","X","O","X"],["X","O","X","#","X"],["X","X","X","X","X"]]
// 输出： -1
// 解释： 你不可能拿到食物。
// 示例 3:

// 输入: grid = [["X","X","X","X","X","X","X","X"],["X","*","O","X","O","#","O","X"],["X","O","O","X","O","O","X","X"],["X","O","O","O","O","#","O","X"],["X","X","X","X","X","X","X","X"]]
// 输出: 6
// 解释: 这里有多个食物。拿到下边的食物仅需走 6 步。

/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function(grid) {
  let m = grid.length;
  if (m == 0) return -1;
  let n = grid[0].length;

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  function bfs(grid, x, y) {
    let queue = [];
    queue.push([x, y, 0]);
    visited[x][y] = true;

    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let curPath = queue.shift();
        let curX = curPath[0];
        let curY = curPath[1];

        for (let j = 0; j < dirs.length; j++) {
          let nextX = curX + dirs[j][0];
          let nextY = curY + dirs[j][1];

          
          if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n) {
            if (grid[nextX][nextY] == '#') {
              return curPath[2] + 1;
            }

            if (!visited[nextX][nextY] && grid[nextX][nextY] == 'O') {
              queue.push([nextX, nextY, curPath[2] + 1]);
              visited[nextX][nextY] = true;
            }
          }
        }
      }
    }
    return -1;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == '*') {
        return bfs(grid, i, j);
      }
    }
  }
  return -1;
};