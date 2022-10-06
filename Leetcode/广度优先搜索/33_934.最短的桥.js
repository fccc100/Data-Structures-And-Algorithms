// 934. 最短的桥
// 在给定的二维二进制数组 A 中，存在两座岛。（岛是由四面相连的 1 形成的一个最大组。）

// 现在，我们可以将 0 变为 1，以使两座岛连接起来，变成一座岛。

// 返回必须翻转的 0 的最小数目。（可以保证答案至少是 1 。）

// 示例 1：

// 输入：A = [[0,1],[1,0]]
// 输出：1
// 示例 2：

// 输入：A = [[0,1,0],[0,0,0],[0,0,1]]
// 输出：2
// 示例 3：

// 输入：A = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// 输出：1

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestBridge = function(grid) {
  let m = grid.length;
  if (m == 0) return -1;
  let n = grid[0].length;

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  function dfs(grid, x, y, id) {
    grid[x][y] = id;

    for (let i = 0; i < dirs.length; i++) {
      let nextX = x + dirs[i][0];
      let nextY = y + dirs[i][1];

      if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && grid[nextX][nextY] == 1) {
        dfs(grid, nextX, nextY, id);
      }
    }
  }

  let id = 2;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        dfs(grid, i, j, id);
        id++;
      }
    }
  }

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 2) {
        queue.push([i, j, 0]);
        visited[i][j] = true;
      }
    }
  }

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curPath = queue.shift();
      let curX = curPath[0];
      let curY = curPath[1];
      let curLen = curPath[2];

      for (let j = 0; j < dirs.length; j++) {
        let nextX = curX + dirs[j][0];
        let nextY = curY + dirs[j][1];

        if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n) {
          if (grid[nextX][nextY] == 3) {
            return curLen;
          }

          if (!visited[nextX][nextY] && grid[nextX][nextY] == 0) {
            queue.push([nextX, nextY, curLen + 1]);
            visited[nextX][nextY] = true;
          }
        }
      }
    }
  }

  return -1;
};