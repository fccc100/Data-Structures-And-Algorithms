// 296. 最佳的碰头地点
// 给你一个 m x n  的二进制网格 grid ，其中 1 表示某个朋友的家所处的位置。返回 最小的 总行走距离 。

// 总行走距离 是朋友们家到碰头地点的距离之和。

// 我们将使用 曼哈顿距离 来计算，其中 distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y| 。

// 示例 1：

// 输入: grid = [[1,0,0,0,1],[0,0,0,0,0],[0,0,1,0,0]]
// 输出: 6 
// 解释: 给定的三个人分别住在(0,0)，(0,4) 和 (2,2):
//      (0,2) 是一个最佳的碰面点，其总行走距离为 2 + 2 + 2 = 6，最小，因此返回 6。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
  let m = grid.length;
  if (m == 0) return 0;
  let n = grid[0].length;

  let rowOnes = Array(m).fill(0);
  let colOnes = Array(n).fill(0);

  // 分别计算每行/每列有多少个1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        rowOnes[i]++;
        colOnes[j]++;
      }
    }
  }

  // 找最佳碰头的行
  let t = 0;
  let b = m - 1;
  // i上边的1的个数
  let iOnes = rowOnes[t];
  // j下边的1的个数
  let jOnes = rowOnes[b];

  while(t < b) {
    if (iOnes < jOnes) {
      t++;
      iOnes += rowOnes[t];
    } else {
      b--;
      jOnes += rowOnes[b];
    }
  }

  // 找最佳碰头的列
  let l = 0;
  let r = n - 1;

  let lOnes = colOnes[l];
  let rOnes = colOnes[r];
  while(l < r) {
    if (lOnes < rOnes) {
      l++;
      lOnes += colOnes[l];
    } else {
      r--;
      rOnes += colOnes[r];
    }
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        res += Math.abs(t - i) + Math.abs(l - j);
      }
    }
  }
  return res;
};