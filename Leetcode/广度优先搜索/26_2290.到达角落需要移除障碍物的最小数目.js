// 2290. 到达角落需要移除障碍物的最小数目
// 给你一个下标从 0 开始的二维整数数组 grid ，数组大小为 m x n 。每个单元格都是两个值之一：

// 0 表示一个 空 单元格，
// 1 表示一个可以移除的 障碍物 。
// 你可以向上、下、左、右移动，从一个空单元格移动到另一个空单元格。

// 现在你需要从左上角 (0, 0) 移动到右下角 (m - 1, n - 1) ，返回需要移除的障碍物的 最小 数目。

// 示例 1：

// 输入：grid = [[0,1,1],[1,1,0],[1,1,0]]
// 输出：2
// 解释：可以移除位于 (0, 1) 和 (0, 2) 的障碍物来创建从 (0, 0) 到 (2, 2) 的路径。
// 可以证明我们至少需要移除两个障碍物，所以返回 2 。
// 注意，可能存在其他方式来移除 2 个障碍物，创建出可行的路径。
// 示例 2：

// 输入：grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]
// 输出：0
// 解释：不移除任何障碍物就能从 (0, 0) 到 (2, 4) ，所以返回 0 。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
  // let m = grid.length;
  // if (m == 0) {
  //   return 0;
  // }
  // let n = grid[0].length;

  // let visited = Array(m);
  // for (let i = 0; i < m; i++) {
  //   visited[i] = Array(n).fill(false);
  // }

  // const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  // let queue = [];
  // if (grid[0][0] == 1) {
  //   queue.push([0, 0, 1]);
  // } else {
  //   queue.push([0, 0, 0]);
  // }

  // visited[0][0] = true;

  // let res = m * n;
  // while (queue.length) {
  //   let len = queue.length;

  //   for (let i = 0; i < len; i++) {
  //     let curPos = queue.shift();
  //     let curI = curPos[0];
  //     let curJ = curPos[1];
  //     let curCnt = curPos[2];
      
  //     let hasPath = false;
  //     for (let j = 0; j < dirs.length; j++) {
  //       let nextI = curI + dirs[j][0];
  //       let nextJ = curJ + dirs[j][1];

  //       if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ]) {
  //         if (nextI == m - 1 && nextJ == n - 1) {
  //           res = Math.min(res, grid[nextI][nextJ] == 0 ? curCnt : curCnt + 1);
  //         }
  //         if (grid[nextI][nextJ] == 0) {
  //           hasPath = true;
  //           visited[nextI][nextJ] = true;
  //           queue.push([nextI, nextJ, curCnt]);
  //         } else {
  //           visited[nextI][nextJ] = true;
  //           queue.push([nextI, nextJ, curCnt + 1]);
  //         }
  //       }
  //     }
  //   }
  // }
  // return res;
};