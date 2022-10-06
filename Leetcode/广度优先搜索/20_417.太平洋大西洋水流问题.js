// 417. 太平洋大西洋水流问题
// 有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。 “太平洋” 处于大陆的左边界和上边界，而 “大西洋” 处于大陆的右边界和下边界。

// 这个岛被分割成一个由若干方形单元格组成的网格。给定一个 m x n 的整数矩阵 heights ， heights[r][c] 表示坐标 (r, c) 上单元格 高于海平面的高度 。

// 岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。

// 返回网格坐标 result 的 2D 列表 ，其中 result[i] = [ri, ci] 表示雨水从单元格 (ri, ci) 流动 既可流向太平洋也可流向大西洋 。

// 示例 1：

// 输入: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// 输出: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
// 示例 2：

// 输入: heights = [[2,1],[1,2]]
// 输出: [[0,0],[0,1],[1,0],[1,1]]

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
// BFS
var pacificAtlantic = function (heights) {
  let m = heights.length;
  if (m == 0) {
    return [];
  }
  let n = heights[0].length;

  // -1: 未访问
  // 1： 太平洋
  // 2： 大西洋
  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(-1);
  }

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  // 先从太平洋的边界BFS遍历能到达的地方，标记为1
  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0) {
        queue.push([i, j]);
        visited[i][j] = 1;
      }
    }
  }

  // 所有太平洋边界能到达的地方都在visited中标记为1
  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curPos = queue.shift();
      let curI = curPos[0];
      let curJ = curPos[1];

      for (let j = 0; j < dirs.length; j++) {
        let nextI = curI + dirs[j][0];
        let nextJ = curJ + dirs[j][1];

        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && visited[nextI][nextJ] == -1 && heights[nextI][nextJ] >= heights[curI][curJ]) {
          queue.push([nextI, nextJ]);
          visited[nextI][nextJ] = 1;
        }
      }
    }
  }

  // 从大西洋的边界遍历，大西洋遍历到的地方标记为2
  let res = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == m - 1 || j == n - 1) {
        if (visited[i][j] == 1) {
          res.push([i, j]);
        }
        queue.push([i, j]);
        visited[i][j] = 2;
      }
    }
  }

  // [ [ 0, 4 ], [ 1, 4 ], [ 4, 0 ] ]
  // [
  //   [1,2,2,3,5],
  //   [3,2,3,4,4],
  //   [2,4,5,3,1],
  //   [6,7,1,4,5],
  //   [5,1,1,2,4]
  // ]
  // [
  //   [ 1, 1, 1, 1, 2 ],
  //   [ 1, 1, 1, 1, 2 ],
  //   [ 1, 1, 1, -1, 2 ],
  //   [ 1, 1, -1, -1, 2 ],
  //   [ 2, 2, 2, 2, 2 ]
  // ]

  // 如果大西洋遍历到的地方在visited中标记为1了，说明太平洋也能到达这个地方，加入结果数组中
  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curPos = queue.shift();
      let curI = curPos[0];
      let curJ = curPos[1];

      for (let j = 0; j < dirs.length; j++) {
        let nextI = curI + dirs[j][0];
        let nextJ = curJ + dirs[j][1];



        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n) {
          if (visited[nextI][nextJ] == 1 && heights[nextI][nextJ] >= heights[curI][curJ]) {
            res.push([nextI, nextJ]);
          }

          if (visited[nextI][nextJ] != 2 && heights[nextI][nextJ] >= heights[curI][curJ]) {
            queue.push([nextI, nextJ]);
            visited[nextI][nextJ] = 2;
          }
        }
      }
    }
  }
  return res;
};

// 2.去掉队列shift操作
var pacificAtlantic = function (heights) {
  let m = heights.length;
  if (m == 0) {
    return [];
  }
  let n = heights[0].length;

  // -1: 未访问
  // 1： 太平洋
  // 2： 大西洋
  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(-1);
  }

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0) {
        queue.push([i, j]);
        visited[i][j] = 1;
      }
    }
  }

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

        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && visited[nextI][nextJ] == -1 && heights[nextI][nextJ] >= heights[curI][curJ]) {
          newQueue.push([nextI, nextJ]);
          visited[nextI][nextJ] = 1;
        }
      }
    }
    queue = newQueue;
  }

  queue = [];

  let res = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == m - 1 || j == n - 1) {
        if (visited[i][j] == 1) {
          res.push([i, j]);
        }
        queue.push([i, j]);
        visited[i][j] = 2;
      }
    }
  }

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



        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n) {
          if (visited[nextI][nextJ] == 1 && heights[nextI][nextJ] >= heights[curI][curJ]) {
            res.push([nextI, nextJ]);
          }

          if (visited[nextI][nextJ] != 2 && heights[nextI][nextJ] >= heights[curI][curJ]) {
            newQueue.push([nextI, nextJ]);
            visited[nextI][nextJ] = 2;
          }
        }
      }
    }
    queue = newQueue;
  }
  return res;
};