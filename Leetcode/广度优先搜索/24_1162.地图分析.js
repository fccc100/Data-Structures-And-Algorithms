// 1162. 地图分析
// 你现在手里有一份大小为 n x n 的 网格 grid，上面的每个 单元格 都用 0 和 1 标记好了。其中 0 代表海洋，1 代表陆地。

// 请你找出一个海洋单元格，这个海洋单元格到离它最近的陆地单元格的距离是最大的，并返回该距离。如果网格上只有陆地或者海洋，请返回 -1。

// 我们这里说的距离是「曼哈顿距离」（ Manhattan Distance）：(x0, y0) 和 (x1, y1) 这两个单元格之间的距离是 |x0 - x1| + |y0 - y1| 。

// 示例 1：

// 输入：grid = [[1,0,1],[0,0,0],[1,0,1]]
// 输出：2
// 解释： 
// 海洋单元格 (1, 1) 和所有陆地单元格之间的距离都达到最大，最大距离为 2。
// 示例 2：

// 输入：grid = [[1,0,0],[0,0,0],[0,0,0]]
// 输出：4
// 解释： 
// 海洋单元格 (2, 2) 和所有陆地单元格之间的距离都达到最大，最大距离为 4。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  let m = grid.length;
  if (m == 0) return -1;
  let n = grid[0].length;

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  function bfs(grid, x, y) {
    let visited = Array(m);
    for (let i = 0; i < m; i++) {
      visited[i] = Array(n).fill(false);
    }

    let queue = [];
    queue.push([x, y, 0]);

    while (queue.length) {
      let len = queue.length;

      for (let i = 0; i < len; i++) {
        let curPos = queue.shift();
        let curI = curPos[0];
        let curJ = curPos[1];

        for (let j = 0; j < dirs.length; j++) {
          let nextI = curI + dirs[j][0];
          let nextJ = curJ + dirs[j][1];

          if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ]) {
            if (grid[nextI][nextJ] == 1) {
              return curPos[2] + 1;
            }

            queue.push([nextI, nextJ, curPos[2] + 1]);
            visited[nextI][nextJ] = true;
          }
        }
      }
    }
    return -1;
  }

  let res = -1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 0) {
        res = Math.max(res, bfs(grid, i, j));
      }
    }
  }
  return res;
};

// 2.
var maxDistance = function(grid) {
  let m = grid.length;
  if (m == 0) return -1;
  let n = grid[0].length;

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  function bfs(grid, x, y) {
    let visited = Array(m);
    for (let i = 0; i < m; i++) {
      visited[i] = Array(n).fill(false);
    }

    let queue = [];
    queue.push([x, y, 0]);

    while (queue.length) {
      let len = queue.length;
      let newQueue = [];

      for (let i = 0; i < len; i++) {
        let curPos = queue[i];
        let curI = curPos[0];
        let curJ = curPos[1];

        for (let j = 0; j < dirs.length; j++) {
          let nextI = curI + dirs[j][0];
          let nextJ = curJ + dirs[j][1];

          if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ]) {
            if (grid[nextI][nextJ] == 1) {
              return curPos[2] + 1;
            }

            newQueue.push([nextI, nextJ, curPos[2] + 1]);
            visited[nextI][nextJ] = true;
          }
        }
      }
      queue = newQueue;
    }
    return -1;
  }

  let res = -1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 0) {
        res = Math.max(res, bfs(grid, i, j));
      }
    }
  }
  return res;
};
