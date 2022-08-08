// 2061. 扫地机器人清扫过的空间个数
// 一个房间用一个从 0 开始索引的二维二进制矩阵 room 表示，其中 0 表示空闲空间， 1 表示放有物体的空间。在每个测试用例中，房间左上角永远是空闲的。

// 一个扫地机器人面向右侧，从左上角开始清扫。机器人将一直前进，直到抵达房间边界或触碰到物体时，机器人将会顺时针旋转 90 度并重复以上步骤。初始位置和所有机器人走过的空间都会被它清扫干净。

// 若机器人持续运转下去，返回被清扫干净的空间数量。

// 示例 1：

// 输入: room = [[0,0,0],[1,1,0],[0,0,0]]
// 输出: 7
// 解释:
// 机器人清理了位于 (0, 0)、 (0, 1) 和 (0, 2) 的空间。
// 机器人位于房间边界，所以它顺时针旋转 90 度，现在面向下。
// 机器人清理了位于 (1, 2) 和 (2, 2) 的空间。
// 机器人位于房间边界，所以它顺时针旋转 90 度，现在面向左。
// 机器人清理了位于 (2, 1) 和 (2, 0) 的空间。
// 机器人已清理了所有 7 处空闲空间，所以返回 7。
// 示例 2：

// 输入: room = [[0,1,0],[1,0,0],[0,0,0]]
// 输出t: 1
// 解释:
// 机器人清理了位于 (0, 0) 的空间。
// 机器人触碰到了物体，所以它顺时针旋转 90 度，现在面向下。
// 机器人触碰到了物体，所以它顺时针旋转 90 度，现在面向左。
// 机器人位于房间边界，所以它顺时针旋转 90 度，现在面向上。
// 机器人位于房间边界，所以它顺时针旋转 90 度，现在面向右。
// 机器人回到了起始位置。
// 机器人清理了 1 处空间，所以返回 1。

/**
 * @param {number[][]} room
 * @return {number}
 */
var numberOfCleanRooms = function(room) {
  let m = room.length;
  if (m == 0) return 0;
  let n = room[0].length;

  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let dirIndex = 0;

  let res = 0;

  let map = new Map();
  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  function dfs(grid, x, y) {
    if (!visited[x][y]) {
      res++;
    }

    visited[x][y] = true;
    let dir = dirs[dirIndex];
    
    let nextX = x + dir[0];
    let nextY = y + dir[1];

    for (let i = 0; i < 4; i++) {
      if (nextX < 0 || nextX >= m || nextY < 0 || nextY >= n || grid[nextX][nextY] == 1) {
        dirIndex = (dirIndex + 1) % 4;
        dir = dirs[dirIndex];
        nextX = x + dir[0];
        nextY = y + dir[1];
      }
    }

    if (map.has(x + ',' + y) && map.get(x + ',' + y) == dirIndex) {
      return;
    }

    map.set(x + ',' + y, dirIndex);

    if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && grid[nextX][nextY] == 0) {
      dfs(grid, nextX, nextY);
    }
  }

  dfs(room, 0, 0);
  return res;
};

// [
//   [0,0,0,1],
//   [0,1,0,1],
//   [1,0,0,0]
// ]

// 0 0
// 0 1
// 0 2
// 1 2
// 2 2
// 2 1

// 0 0
// 0 1
// 0 2
// 1 2
// 2 2
// 2 1
// 2 2
// 2 3
// 2 2
// 2 1
