// 面试题 08.10. 颜色填充
// 编写函数，实现许多图片编辑软件都支持的「颜色填充」功能。

// 待填充的图像用二维数组 image 表示，元素为初始颜色值。初始坐标点的行坐标为 sr 列坐标为 sc。需要填充的新颜色为 newColor 。

// 「周围区域」是指颜色相同且在上、下、左、右四个方向上存在相连情况的若干元素。

// 请用新颜色填充初始坐标点的周围区域，并返回填充后的图像。

// 示例：

// 输入：
// image = [[1,1,1],[1,1,0],[1,0,1]] 
// sr = 1, sc = 1, newColor = 2
// 输出：[[2,2,2],[2,2,0],[2,0,1]]
// 解释: 
// 初始坐标点位于图像的正中间，坐标 (sr,sc)=(1,1) 。
// 初始坐标点周围区域上所有符合条件的像素点的颜色都被更改成 2 。
// 注意，右下角的像素没有更改为 2 ，因为它不属于初始坐标点的周围区域。

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  // 1 1 1
  // 1 1 0
  // 1 0 1

  let m = image.length;
  if (m == 0) return [];
  let n = image[0].length;

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  let originColor = image[sr][sc];

  let queue = [];
  queue.push([sr, sc]);
  visited[sr][sc] = true;
  image[sr][sc] = newColor;

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let curPath = queue.shift();
      let curI = curPath[0];
      let curJ = curPath[1];

      for (let j = 0; j < dirs.length; j++) {
        let nextI = curI + dirs[j][0];
        let nextJ = curJ + dirs[j][1];
        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ] && image[nextI][nextJ] == originColor) {
          queue.push([nextI, nextJ]);
          image[nextI][nextJ] = newColor;
          visited[nextI][nextJ] = true;
        }
      }
    }
  }
  return image;
};


// 去掉shift操作
var floodFill = function (image, sr, sc, newColor) {
  // 1 1 1
  // 1 1 0
  // 1 0 1

  let m = image.length;
  if (m == 0) return [];
  let n = image[0].length;

  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  let visited = Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = Array(n).fill(false);
  }

  let originColor = image[sr][sc];

  let queue = [];
  queue.push([sr, sc]);
  visited[sr][sc] = true;
  image[sr][sc] = newColor;

  while (queue.length) {
    let len = queue.length;
    let newQueue = [];

    for (let i = 0; i < len; i++) {
      let curPath = queue[i];
      let curI = curPath[0];
      let curJ = curPath[1];

      for (let j = 0; j < dirs.length; j++) {
        let nextI = curI + dirs[j][0];
        let nextJ = curJ + dirs[j][1];
        if (nextI >= 0 && nextI < m && nextJ >= 0 && nextJ < n && !visited[nextI][nextJ] && image[nextI][nextJ] == originColor) {
          newQueue.push([nextI, nextJ]);
          image[nextI][nextJ] = newColor;
          visited[nextI][nextJ] = true;
        }
      }
    }
    queue = newQueue;
  }
  return image;
};