// 面试题 16.19. 水域大小
// 你有一个用于表示一片土地的整数矩阵land，该矩阵中每个点的值代表对应地点的海拔高度。若值为0则表示水域。由垂直、水平或对角连接的水域为池塘。池塘的大小是指相连接的水域的个数。编写一个方法来计算矩阵中所有池塘的大小，返回值需要从小到大排序。

// 示例：

// 输入：
// [
//   [0,2,1,0],
//   [0,1,0,1],
//   [1,1,0,1],
//   [0,1,0,1]
// ]
// 输出： [1,2,4]

/**
 * @param {number[][]} land
 * @return {number[]}
 */
// dfs无返回值写法
var pondSizes = function(land) {
  let m = land.length;
  if (m == 0) {
    return [];
  }
  let n = land[0].length;

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  const dirs = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1]
  ];

  let res = 0;

  // dfs无返回值
  function dfs(grid, i, j) {
    res++;
    visited[i][j] = true;
    for (let k = 0; k < dirs.length; k++) {
      let nextI = i + dirs[k][0];
      let nextJ = j + dirs[k][1];

      if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ] && grid[nextI][nextJ] == 0) {
        dfs(grid, nextI, nextJ);
      }
    }
  }

  let ans = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (land[i][j] == 0 && !visited[i][j]) {
        dfs(land, i, j)
        ans.push(res);
        res = 0;
      }
    }
  }
  return ans.sort((a, b) => a - b);
};

// dfs带返回值写法
var pondSizes = function(land) {
  let m = land.length;
  if (m == 0) {
    return [];
  }
  let n = land[0].length;

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  const dirs = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1]
  ];

  // dfs返回i，j位置的水域大小
  function dfs(grid, i, j) {
    
    let res = 1;
    visited[i][j] = true;
    for (let k = 0; k < dirs.length; k++) {
      let nextI = i + dirs[k][0];
      let nextJ = j + dirs[k][1];

      if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ] && grid[nextI][nextJ] == 0) {
        res += dfs(grid, nextI, nextJ);
      }
    }
    return res;
  }

  let ans = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (land[i][j] == 0 && !visited[i][j]) {        
        ans.push(dfs(land, i, j));
      }
    }
  }
  return ans.sort((a, b) => a - b);
};