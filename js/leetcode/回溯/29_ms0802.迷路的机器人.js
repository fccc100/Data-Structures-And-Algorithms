// 面试题 08.02. 迷路的机器人
// 设想有个机器人坐在一个网格的左上角，网格 r 行 c 列。机器人只能向下或向右移动，但不能走到一些被禁止的网格（有障碍物）。设计一种算法，寻找机器人从左上角移动到右下角的路径。

// 网格中的障碍物和空位置分别用 1 和 0 来表示。
// 返回一条可行的路径，路径由经过的网格的行号和列号组成。左上角为 0 行 0 列。如果没有可行的路径，返回空数组。

// 示例 1:
// 输入:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// 输出: [[0,0],[0,1],[0,2],[1,2],[2,2]]
// 解释: 
// 输入中标粗的位置即为输出表示的路径，即
// 0行0列（左上角） -> 0行1列 -> 0行2列 -> 1行2列 -> 2行2列（右下角）

function pathWithObstacles(obstacleGrid) {
  let m = obstacleGrid.length;
  if (!m) return [];
  let n = obstacleGrid[0].length;
  let finish = false;
  let res = [];

  function dfs(obstacleGrid, i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || obstacleGrid[i][j] == 1) {
      return;
    }
    res.push([i, j]);
    obstacleGrid[i][j] = 1;
    if (i == m - 1 && j == n - 1) {
      finish = true;
    }
    if (!finish) {
      dfs(obstacleGrid, i + 1, j);
    }
    if (!finish) {
      dfs(obstacleGrid, i, j + 1);
    }
    if (!finish) {
      res.pop();
    }
  }

  dfs(obstacleGrid, 0, 0);
  return res;
  // let m = obstacleGrid.length;
  // if (!m) return [];
  // let n = obstacleGrid[0].length;
  // let dir = [[0, 1], [1, 0]];
  // let visited = Array(m);
  // for (let i = 0; i < m; i++) {
  //   visited[i] = Array(n).fill(false);
  // }
  // let res = [];

  // function dfs(obstacleGrid, i, j) {
  //   if (obstacleGrid[i][j] == '1') {
  //     return false;
  //   }
  //   res.push([i, j]);
  //   if (i == m - 1 && j == n - 1) {
  //     if (obstacleGrid[i][j] == 1) {
  //       res.pop();
  //       return false;
  //     }
  //     return true;
  //   }

  //   visited[i][j] = true;
  //   for (let k = 0; k < 2; k++) {
  //     let newI = i + dir[k][0];
  //     let newJ = j + dir[k][1];
  //     if (newI >= 0 && newI < m && newJ >= 0 && newJ < n && !visited[newI][newJ] && obstacleGrid[newI][newJ] != '1') {
  //       if (dfs(obstacleGrid, newI, newJ)) {
  //         return true;
  //       }
  //     }
  //   }

  //   visited[i][j] = false;
  //   res.pop();
  //   return false;
  // }

  // if (dfs(obstacleGrid, 0, 0)) {
  //   return res;
  // } else {
  //   return [];
  // }
}