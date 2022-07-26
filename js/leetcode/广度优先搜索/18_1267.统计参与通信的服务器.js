// 1267. 统计参与通信的服务器
// 这里有一幅服务器分布图，服务器的位置标识在 m * n 的整数矩阵网格 grid 中，1 表示单元格上有服务器，0 表示没有。

// 如果两台服务器位于同一行或者同一列，我们就认为它们之间可以进行通信。

// 请你统计并返回能够与至少一台其他服务器进行通信的服务器的数量。

// 示例 1：

// 输入：grid = [[1,0],[0,1]]
// 输出：0
// 解释：没有一台服务器能与其他服务器进行通信。
// 示例 2：

// 输入：grid = [[1,0],[1,1]]
// 输出：3
// 解释：所有这些服务器都至少可以与一台别的服务器进行通信。
// 示例 3：

// 输入：grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
// 输出：4
// 解释：第一行的两台服务器互相通信，第三列的两台服务器互相通信，但右下角的服务器无法与其他服务器通信。

/**
 * @param {number[][]} grid
 * @return {number}
 */
// 先求每一行的服务器个数，再求每一列的服务器个数，统计单元格为服务器且该行该列服务器个数为1的点，最终答案就是所有服务器数量减去该数量
var countServers = function(grid) {
  let m = grid.length;
  if (m == 0) return 0;
  let n = grid[0].length;

  // 第i行的服务器数量
  let rowCount = Array(m);
  let sum = 0;
  for (let i = 0; i < m; i++) {
    let cur = 0;
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        sum++;
        cur++;
      }
    }
    rowCount[i] = cur;
  }

  // 第i列的服务器数量
  let colCount = Array(n);
  for (let j = 0; j < n; j++) {
    let cur = 0;
    for (let i = 0; i < m; i++) {
      if (grid[i][j] == 1) {
        cur++;
      }
    }
    colCount[j] = cur;
  }

  // 统计单元格为服务器且该行该列服务器数量为1的个数
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1 && rowCount[i] == 1 && colCount[j] == 1) {
        res++;
      }
    }
  }
  return sum - res;
};