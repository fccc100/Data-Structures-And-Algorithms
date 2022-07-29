// 463. 岛屿的周长
// 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。

// 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

// 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。

// 示例 1：

// 输入：grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// 输出：16
// 解释：它的周长是上面图片中的 16 个黄色的边
// 示例 2：

// 输入：grid = [[1]]
// 输出：4
// 示例 3：

// 输入：grid = [[1,0]]
// 输出：4

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let m = grid.length;
  if (m == 0) {
    return 0;
  }
  let n = grid[0].length;

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  function bfs(grid, x, y) {
    let queue = [];
    queue.push([x, y]);
    visited[x][y] = true;

    let ans = 0;
    while (queue.length) {
      let len = queue.length;
      
      for (let i = 0; i < len; i++) {
        let curPos = queue.shift();
        let curI = curPos[0];
        let curJ = curPos[1];
        
        let res = 0;
        for (let j = 0; j < dirs.length; j++) {
          let nextI = curI + dirs[j][0];
          let nextJ = curJ + dirs[j][1];

          if (nextI < 0 || nextI >= m || nextJ < 0 || nextJ >= n || grid[nextI][nextJ] == 0) {
            res++;
          }

          if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ] && grid[nextI][nextJ] == 1) {
            visited[nextI][nextJ] = true;
            queue.push([nextI, nextJ]);
          }
        }
        ans += res;
      }
    }
    return ans;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        return bfs(grid, i, j);
      }
    }
  }
  return 0;
};