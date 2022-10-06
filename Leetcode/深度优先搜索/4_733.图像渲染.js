// 733. 图像渲染
// 有一幅以 m x n 的二维整数数组表示的图画 image ，其中 image[i][j] 表示该图画的像素值大小。

// 你也被给予三个整数 sr ,  sc 和 newColor 。你应该从像素 image[sr][sc] 开始对图像进行 上色填充 。

// 为了完成 上色工作 ，从初始像素开始，记录初始坐标的 上下左右四个方向上 像素值与初始坐标相同的相连像素点，接着再记录这四个方向上符合条件的像素点与他们对应 四个方向上 像素值与初始坐标相同的相连像素点，……，重复该过程。将所有有记录的像素点的颜色值改为 newColor 。

// 最后返回 经过上色渲染后的图像 。

// 示例 1:

// 输入: image = [[1,1,1],[1,1,0],[1,0,1]]，sr = 1, sc = 1, newColor = 2
// 输出: [[2,2,2],[2,2,0],[2,0,1]]
// 解析: 在图像的正中间，(坐标(sr,sc)=(1,1)),在路径上所有符合条件的像素点的颜色都被更改成2。
// 注意，右下角的像素没有更改为2，因为它不是在上下左右四个方向上与初始点相连的像素点。
// 示例 2:

// 输入: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
// 输出: [[2,2,2],[2,2,2]]

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let m = image.length;
  let n = image[0].length;
  let dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];

  function dfs(image, sr, sc, newColor, target) {

    if (image[sr][sc] == target) {
      image[sr][sc] = newColor
      for (let i = 0; i < dir.length; i++) {
        let newSr = sr + dir[i][0];
        let newSc = sc + dir[i][1];
        if (newSr >= 0 && newSr < m && newSc >= 0 && newSc < n) {
          dfs(image, newSr, newSc, newColor, target);
        }
      }
    }
  }

  let target = image[sr][sc]
  if (target != newColor) {
    dfs(image, sr, sc, newColor, target);
  }
  return image;
};