// 1219. 黄金矿工
// 你要开发一座金矿，地质勘测学家已经探明了这座金矿中的资源分布，并用大小为 m * n 的网格 grid 进行了标注。每个单元格中的整数就表示这一单元格中的黄金数量；如果该单元格是空的，那么就是 0。

// 为了使收益最大化，矿工需要按以下规则来开采黄金：

// 每当矿工进入一个单元，就会收集该单元格中的所有黄金。
// 矿工每次可以从当前位置向上下左右四个方向走。
// 每个单元格只能被开采（进入）一次。
// 不得开采（进入）黄金数目为 0 的单元格。
// 矿工可以从网格中 任意一个 有黄金的单元格出发或者是停止。

// 示例 1：
// 输入：grid = [[0,6,0],[5,8,7],[0,9,0]]
// 输出：24
// 解释：
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// 一种收集最多黄金的路线是：9 -> 8 -> 7。

function getMaximumGold(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let visited = [];
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  let res = 0;
  function dfs(grid, i, j, gold) {
    res = Math.max(res, gold);

    visited[i][j] = true;
    for (let k = 0; k < 4; k++) {
      let newI = i + dir[k][0];
      let newJ = j + dir[k][1];
      if (newI >= 0 && newI < m && newJ >= 0 && newJ < n && grid[newI][newJ] > 0 && !visited[newI][newJ]) {
        dfs(grid, newI, newJ, gold + grid[newI][newJ])
      }
    }
    visited[i][j] = false;
    return;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(grid, i, j, grid[i][j]);
    }
  }
  return res;
}