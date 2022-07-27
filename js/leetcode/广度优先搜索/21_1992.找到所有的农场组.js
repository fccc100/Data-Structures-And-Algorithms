// 1992. 找到所有的农场组
// 给你一个下标从 0 开始，大小为 m x n 的二进制矩阵 land ，其中 0 表示一单位的森林土地，1 表示一单位的农场土地。

// 为了让农场保持有序，农场土地之间以矩形的 农场组 的形式存在。每一个农场组都 仅 包含农场土地。且题目保证不会有两个农场组相邻，
// 也就是说一个农场组中的任何一块土地都 不会 与另一个农场组的任何一块土地在四个方向上相邻。

// land 可以用坐标系统表示，其中 land 左上角坐标为 (0, 0) ，右下角坐标为 (m-1, n-1) 。请你找到所有 农场组 最左上角和最右下角的坐标。
// 一个左上角坐标为 (r1, c1) 且右下角坐标为 (r2, c2) 的 农场组 用长度为 4 的数组 [r1, c1, r2, c2] 表示。

// 请你返回一个二维数组，它包含若干个长度为 4 的子数组，每个子数组表示 land 中的一个 农场组 。如果没有任何农场组，请你返回一个空数组。可以以 任意顺序 返回所有农场组。

// 示例 1：

// 输入：land = [[1,0,0],[0,1,1],[0,1,1]]
// 输出：[[0,0,0,0],[1,1,2,2]]
// 解释：
// 第一个农场组的左上角为 land[0][0] ，右下角为 land[0][0] 。
// 第二个农场组的左上角为 land[1][1] ，右下角为 land[2][2] 。
// 示例 2：

// 输入：land = [[1,1],[1,1]]
// 输出：[[0,0,1,1]]
// 解释：
// 第一个农场组左上角为 land[0][0] ，右下角为 land[1][1] 。
// 示例 3：

// 输入：land = [[0]]
// 输出：[]
// 解释：
// 没有任何农场组。

/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
  let m = land.length;
  if (m == 0) return [];
  let n = land[0].length;

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  function bfs(x, y) {
    let queue = [];
    queue.push([x, y]);
    visited[x][y] = true;

    let res = [x, y, x, y];
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

          if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ] && land[nextI][nextJ] == 1) {
            newQueue.push([nextI, nextJ])
            res[0] = Math.min(res[0], nextI);
            res[1] = Math.min(res[1], nextJ);
            res[2] = Math.max(res[2], nextI);
            res[3] = Math.max(res[3], nextJ);
            visited[nextI][nextJ] = true;
          }
        }
      }
      queue = newQueue;
    }
    return res;
  }

  let res = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && land[i][j] == 1) {
        res.push(bfs(i, j));
      }
    }
  }
  return res;
};