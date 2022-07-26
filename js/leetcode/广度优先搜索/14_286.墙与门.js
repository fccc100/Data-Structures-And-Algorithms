// 286. 墙与门
// 你被给定一个 m × n 的二维网格 rooms ，网格中有以下三种可能的初始化值：

// -1 表示墙或是障碍物
// 0 表示一扇门
// INF 无限表示一个空的房间。然后，我们用 231 - 1 = 2147483647 代表 INF。你可以认为通往门的距离总是小于 2147483647 的。
// 你要给每个空房间位上填上该房间到 最近门的距离 ，如果无法到达门，则填 INF 即可。

// 示例 1：

// 输入：rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
// 输出：[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
// 示例 2：

// 输入：rooms = [[-1]]
// 输出：[[-1]]
// 示例 3：

// 输入：rooms = [[2147483647]]
// 输出：[[2147483647]]
// 示例 4：

// 输入：rooms = [[0]]
// 输出：[[0]]

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

// 1.对rooms中的每个是房间的点进行广度优先遍历查找距离门的最短路径
// 每个点都需要进行一次BFS，性能较差，勉强通过
var wallsAndGates = function (rooms) {
  let m = rooms.length;
  if (m == 0) {
    return [];
  }
  let n = rooms[0].length;

  let temp = Array(m);
  for (let i = 0; i < m; i++) {
    temp[i] = rooms[i].slice();
  }

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  // BFS
  function bfs(grid, x, y) {
    let queue = [];
    queue.push([x, y, 0]);

    visited[x][y] = true;

    while (queue.length) {
      let len = queue.length;

      for (let i = 0; i < len; i++) {
        let curPath = queue.shift();
        let curI = curPath[0];
        let curJ = curPath[1];
        let curDis = curPath[2];

        for (j = 0; j < dirs.length; j++) {
          let nextI = curI + dirs[j][0];
          let nextJ = curJ + dirs[j][1];

          if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ]) {
            if (grid[nextI][nextJ] == 0) {
              return curDis + 1;
            }

            if (grid[nextI][nextJ] == 2147483647) {
              visited[nextI][nextJ] = true;
              queue.push([nextI, nextJ, curDis + 1]);
            }
          }
        }
      }
    }
    return 2147483647;
  }

  // 对每个房间进行BFS
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] == 2147483647) {
        rooms[i][j] = bfs(temp, i, j);
        reInit(visited);
      }
    }
  }
  return rooms;
};

function reInit(visited) {
  for (let i = 0; i < visited.length; i++) {
    for (let j = 0; j < visited[i].length; j++) {
      visited[i][j] = false;
    }
  }
}

// 2.从门开始遍历找房间
var wallsAndGates = function (rooms) {
  let m = rooms.length;
  if (m == 0) {
    return [];
  }
  let n = rooms[0].length;

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  function bfs(grid, x, y) {
    let queue = [];
    queue.push([x, y, 0]);
    visited[x][y] = true;

    while (queue.length) {
      let len = queue.length;

      for (let i = 0; i < len; i++) {
        let curPath = queue.shift();
        let curI = curPath[0];
        let curJ = curPath[1];
        let curDis = curPath[2];

        for (j = 0; j < dirs.length; j++) {
          let nextI = curI + dirs[j][0];
          let nextJ = curJ + dirs[j][1];

          if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ]) {
            if (grid[nextI][nextJ] > 0) {
              grid[nextI][nextJ] = Math.min(grid[nextI][nextJ], curDis + 1);
              
              visited[nextI][nextJ] = true;
              queue.push([nextI, nextJ, curDis + 1]);
            }
          }
        }
      }
    }
  }

  // 从门开始遍历找房间
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] == 0) {
        bfs(rooms, i, j);
        reInit(visited);
      }
    }
  }
  return rooms;
}

function reInit(visited) {
  for (let i = 0; i < visited.length; i++) {
    for (let j = 0; j < visited[i].length; j++) {
      visited[i][j] = false;
    }
  }
}

// 3.所有门同时进行广度优先遍历
var wallsAndGates = function (rooms) {
  let m = rooms.length;
  if (m == 0) {
    return [];
  }
  let n = rooms[0].length;

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] == 0) {
        queue.push([i, j, 0]);
      }
    }
  }

  while (queue.length) {
    let len = queue.length;
    
    for (let i = 0; i < len; i++) {
      let curPath = queue.shift();
      let curI = curPath[0];
      let curJ = curPath[1];
      let curDis = curPath[2];

      for (j = 0; j < dirs.length; j++) {
        let nextI = curI + dirs[j][0];
        let nextJ = curJ + dirs[j][1];

        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && rooms[nextI][nextJ] == 2147483647) {
          rooms[nextI][nextJ] = curDis + 1;
          queue.push([nextI, nextJ, curDis + 1]);
        }
      }
    }
  }
  return rooms;
}

// 不使用shift操作
// 直接优化成100%^^
var wallsAndGates = function (rooms) {
  let m = rooms.length;
  if (m == 0) {
    return [];
  }
  let n = rooms[0].length;

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (rooms[i][j] == 0) {
        queue.push([i, j, 0]);
      }
    }
  }

  while (queue.length) {
    let len = queue.length;
    let newQueue = [];
    
    for (let i = 0; i < len; i++) {
      let curPath = queue[i];
      let curI = curPath[0];
      let curJ = curPath[1];
      let curDis = curPath[2];

      for (j = 0; j < dirs.length; j++) {
        let nextI = curI + dirs[j][0];
        let nextJ = curJ + dirs[j][1];

        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && rooms[nextI][nextJ] == 2147483647) {
          rooms[nextI][nextJ] = curDis + 1;
          newQueue.push([nextI, nextJ, curDis + 1]);
        }
      }
    }
    queue = newQueue;
  }
  return rooms;
}