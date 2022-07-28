// 827. 最大人工岛
// 给你一个大小为 n x n 二进制矩阵 grid 。最多 只能将一格 0 变成 1 。

// 返回执行此操作后，grid 中最大的岛屿面积是多少？

// 岛屿 由一组上、下、左、右四个方向相连的 1 形成。

// 示例 1:

// 输入: grid = [[1, 0], [0, 1]]
// 输出: 3
// 解释: 将一格0变成1，最终连通两个小岛得到面积为 3 的岛屿。
// 示例 2:

// 输入: grid = [[1, 1], [1, 0]]
// 输出: 4
// 解释: 将一格0变成1，岛屿的面积扩大为 4。
// 示例 3:

// 输入: grid = [[1, 1], [1, 1]]
// 输出: 4
// 解释: 没有0可以让我们变成1，面积依然为 4。

/**
 * @param {number[][]} grid
 * @return {number}
 */
// 直接遍历每个位置求最大面积，超时
var largestIsland = function(grid) {
  let m = grid.length;
  if (m == 0) return 0;
  let n = grid[0].length;

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  function bfs(grid, x, y) {
    visited[x][y] = true;

    let queue = [];
    queue.push([x, y]);

    let res = 1;
    while (queue.length) {
      let len = queue.length;

      for (let i = 0; i < len; i++) {
        let curPos = queue.shift();
        let curI = curPos[0];
        let curJ = curPos[1];

        for (let j = 0; j < dirs.length; j++) {
          let nextI = curI + dirs[j][0];
          let nextJ = curJ + dirs[j][1];

          if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ] && grid[nextI][nextJ] == 1) {
            queue.push([nextI, nextJ]);
            visited[nextI][nextJ] = true;
            res++;
          }
        }
      }
    }
    return res;
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        res = Math.max(res, bfs(grid, i, j));
        reInit(visited);
      }
    }
  }
  return res;
};

function reInit(visited) {
  for (let i = 0; i < visited.length; i++) {
    for (let j = 0; j < visited[i].length; j++) {
      visited[i][j] = false;
    }
  }
}

// 2.先将1的区域全部统计出来，再遍历0位置计算四周的岛屿大小
var largestIsland = function(grid) {
  let m = grid.length;
  if (m == 0) return 0;
  let n = grid[0].length;

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  function bfs(grid, x, y) {
    visited[x][y] = true;

    let queue = [];
    queue.push([x, y]);

    let res = 1;
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

          if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ] && grid[nextI][nextJ] == 1) {
            newQueue.push([nextI, nextJ]);
            visited[nextI][nextJ] = true;
            res++;
          }
        }
      }
      queue = newQueue;
    }
    return res;
  }

  function dfs(grid, x, y, val) {
    grid[x][y] = val;

    for (let j = 0; j < dirs.length; j++) {
      let nextI = x + dirs[j][0];
      let nextJ = y + dirs[j][1];

      if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && grid[nextI][nextJ] == 1) {
        dfs(grid, nextI, nextJ, val);
      }
    }
  }

  let res = 0;
  let curSeq = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        let curArea = bfs(grid, i, j);
        res = Math.max(res, curArea);

        curSeq++;
        dfs(grid, i, j, curArea + ',' + curSeq);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 0) {
        let curArea = 1;

        let set = new Set();
        for (let k = 0; k < dirs.length; k++) {
          let nextI = i + dirs[k][0];
          let nextJ = j + dirs[k][1];

    
          if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n) {
            let cur = grid[nextI][nextJ];
            if (cur == 0) {
              continue;
            }
            let arr = cur.split(',');

            if (!set.has(arr[1])) {
              set.add(arr[1]);
              curArea += Number(arr[0]);
            }
          }
        }

        res = Math.max(res, curArea);
      }
    }
  }
  return res;
}

// [
//   [1,0,0],
//   [0,1,0],
//   [1,1,0]
// ]

// [
//   [ '1,1',    0,    0 ],
//   [   0,    '3,2',  0 ],
//   [ '3,2',  '3,2',  0 ] 
// ]


// [
//   [0,      0,       0,      0,       0,     0,    0],
//   [0,    '15,1',  '15,1', '15,1',  '15,1',  0,    0],
//   [0,    '15,1',    0,      0,     '15,1',  0,    0],
//   ['1,2',  0,      '1,3',   0,     '15,1',  0,    0],
//   [0,    '15,1',    0,      0,     '15,1',  0,    0],
//   [0,    '15,1',    0,      0,     '15,1',  0,    0],
//   [0,    '15,1',  '15,1', '15,1',  '15,1',  0,    0]
// ]
