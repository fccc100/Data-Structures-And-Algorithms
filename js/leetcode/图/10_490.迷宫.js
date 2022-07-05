// 490. 迷宫
// 由空地（用 0 表示）和墙（用 1 表示）组成的迷宫 maze 中有一个球。球可以途经空地向 上、下、左、右 四个方向滚动，且在遇到墙壁前不会停止滚动。当球停下时，可以选择向下一个方向滚动。
// 给你一个大小为 m x n 的迷宫 maze ，以及球的初始位置 start 和目的地 destination ，其中 start = [startrow, startcol] 且 destination = [destinationrow, destinationcol] 。请你判断球能否在目的地停下：如果可以，返回 true ；否则，返回 false 。

// 你可以 假定迷宫的边缘都是墙壁（参考示例）。

// 示例 1：

// 输入：maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [4,4]
// 输出：true
// 解释：一种可能的路径是 : 左 -> 下 -> 左 -> 下 -> 右 -> 下 -> 右。
// 示例 2：

// 输入：maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [3,2]
// 输出：false
// 解释：不存在能够使球停在目的地的路径。注意，球可以经过目的地，但无法在那里停驻。
// 示例 3：

// 输入：maze = [[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]], start = [4,3], destination = [0,1]
// 输出：false

/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
  // let m = maze.length;
  // let n = maze[0].length;

  // let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  // let queue = [];

  // queue.push(start);
  // while(queue.length) {
  //   let curPos = queue.shift();

  //   if (curPos[0] == destination[0] && curPos[1] == curPos[1]) {
  //     let top = destination[0] - 1 >= 0 ? maze[destination[0] - 1][destination[1]] : 1;
  //     let right = destination[1] + 1 < n ? maze[destination[0]][destination[1] + 1] : 1;
  //     let bottom = destination[0] + 1 < m ? maze[destination[0] + 1][destination[1]] : 1;
  //     let left = destination[1] - 1 >= 0 ? maze[destination[0]][destination[1] - 1] : 1;

  //     if (!((top == 0 && bottom == 0 && left == 0 && right == 0) || (top == 0 && bottom == 0 && left == 1 && right == 1) || (top == 1 && bottom == 1 && left == 0 && right == 0))) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  //   for (let i = 0; i < 4; i++) {
  //     let nextRow = curPos[0] + dir[i][0];
  //     let nextCol = curPos[1] + dir[i][1];
  //     if (nextRow >= 0 && nextRow < m && nextCol >= 0 && nextCol < n && maze[nextRow][nextCol] == 0) {
  //       queue.push([nextRow, nextCol]);
  //     }
  //   }
  // }
  // return false;
};
