// 417. 太平洋大西洋水流问题
// 有一个 m × n 的矩形岛屿，与 太平洋 和 大西洋 相邻。 “太平洋” 处于大陆的左边界和上边界，而 “大西洋” 处于大陆的右边界和下边界。

// 这个岛被分割成一个由若干方形单元格组成的网格。给定一个 m x n 的整数矩阵 heights ， heights[r][c] 表示坐标 (r, c) 上单元格 高于海平面的高度 。

// 岛上雨水较多，如果相邻单元格的高度 小于或等于 当前单元格的高度，雨水可以直接向北、南、东、西流向相邻单元格。水可以从海洋附近的任何单元格流入海洋。

// 返回 网格坐标 result 的 2D列表 ，其中 result[i] = [ri, ci] 表示雨水可以从单元格 (ri, ci) 流向 太平洋和大西洋 。

// 示例 1：
// 输入: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
// 输出: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

function pacificAtlantic(heights) {
  let m = heights.length;
  if (m == 0) return [];
  let n = heights[0].length;
  let res = [];
  let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let visited = [];
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }
  let flowToPacific = false;
  let flowToAtlantic = false;
  function dfs(heights, i, j) {
    if (i == 0 || j == 0) {
      flowToPacific = true;
    }
    if (i >= m - 1 || j >= n - 1) {
      flowToAtlantic = true;
    }

    visited[i][j] = true;
    for (let k = 0; k < 4; k++) {
      let newI = i + dirs[k][0];
      let newJ = j + dirs[k][1];
      if (newI >= 0 && newI < m && newJ >= 0 && newJ < n && !visited[newI][newJ] && heights[newI][newJ] <= heights[i][j]) {
        dfs(heights, newI, newJ);
      }
    }
    visited[i][j] = false;
    return;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(heights, i, j);
      if (flowToAtlantic && flowToPacific) {
        res.push([i, j]);
      }
      flowToPacific = false;
      flowToAtlantic = false;
    }
  }

  return res;
}