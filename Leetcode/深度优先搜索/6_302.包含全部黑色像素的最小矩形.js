// 302. 包含全部黑色像素的最小矩形
// 图片在计算机处理中往往是使用二维矩阵来表示的。

// 给你一个大小为 m x n 的二进制矩阵 image 表示一张黑白图片，0 代表白色像素，1 代表黑色像素。

// 黑色像素相互连接，也就是说，图片中只会有一片连在一块儿的黑色像素。像素点是水平或竖直方向连接的。

// 给你两个整数 x 和 y 表示某一个黑色像素的位置，请你找出包含全部黑色像素的最小矩形（与坐标轴对齐），并返回该矩形的面积。

// 你必须设计并实现一个时间复杂度低于 O(mn) 的算法来解决此问题。

// 示例 1：

// 输入：image = [["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]], x = 0, y = 2
// 输出：6
// 示例 2：

// 输入：image = [["1"]], x = 0, y = 0
// 输出：1

// 勉强通过
var minArea = function(image, x, y) {
  let m = image.length;
  let n = image[0].length;

  let dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];

  let res = [];
  function dfs(grid, i, j) {
    res.push([i, j]);
    grid[i][j] = 2;

    for (let k = 0; k < dirs.length; k++) {
      let nextI = i + dirs[k][0];
      let nextJ = j + dirs[k][1];
      
      if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && grid[nextI][nextJ] == 1) {
        dfs(grid, nextI, nextJ);
      }
    }
  }

  dfs(image, x, y);

  res.sort((a, b) => a[0] - b[0]);
  let h = res[res.length - 1][0] - res[0][0] + 1;
  
  res.sort((a, b) => a[1] - b[1]);
  let w = res[res.length - 1][1] - res[0][1] + 1;

  return h * w;
};

// 可以不需要排序操作，直接在dfs过程中记录x、y能到达的边界，修改后直接超过100%
var minArea = function(image, x, y) {
  let m = image.length;
  let n = image[0].length;

  let dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];

  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  
  function dfs(grid, i, j) {
    if (i < minX) {
      minX = i;
    }
    if (i > maxX) {
      maxX = i;
    }
    if (j < minY) {
      minY = j;
    }
    if (j > maxY) {
      maxY = j;
    }
    
    grid[i][j] = 2;

    for (let k = 0; k < dirs.length; k++) {
      let nextI = i + dirs[k][0];
      let nextJ = j + dirs[k][1];
      
      if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && grid[nextI][nextJ] == 1) {
        dfs(grid, nextI, nextJ);
      }
    }
  }

  dfs(image, x, y);

  return (maxX - minX + 1) * (maxY - minY + 1);
};