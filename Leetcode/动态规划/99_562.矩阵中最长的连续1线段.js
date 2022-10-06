// 562. 矩阵中最长的连续1线段
// 给定一个 m x n 的二进制矩阵 mat ，返回矩阵中最长的连续1线段。

// 这条线段可以是水平的、垂直的、对角线的或者反对角线的。

// 示例 1:

// 输入: mat = 
// [
//  [0,1,1,0],
//  [0,1,1,0],
//  [0,0,0,1]
// ]

// [
//  [ 0, 1, 2, 0 ],
//  [ 0, 3, 4, 0 ],
//  [ 0, 0, 0, 5 ]
// ]

// 输出: 3

var longestLine = function(mat) {
  let m = mat.length;
  if (m == 0) return 0;
  let n = mat[0].length;
  // 横向直线dp
  let dp1 = Array(m);
  // 纵向直线dp
  let dp2 = Array(m);
  // 左下-右上 对角线dp
  let dp3 = Array(m);
  // 左上-右下 对角线dp
  let dp4 = Array(m);

  let ans = 0;
  for (let i = 0; i < m; i++) {
    dp1[i] = Array(n);
    dp2[i] = Array(n);
    dp3[i] = Array(n);
    dp4[i] = Array(n);
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 0) {
        dp1[i][j] = 0;
        dp2[i][j] = 0;
        dp3[i][j] = 0;
        dp4[i][j] = 0;
      } else {
        dp1[i][j] = j > 0 ? dp1[i][j - 1] + 1 : mat[i][j];
        dp2[i][j] = i > 0 ? dp2[i - 1][j] + 1 : mat[i][j];
        dp3[i][j] = (i > 0 && j + 1 < n) ? dp3[i - 1][j + 1] + 1 : mat[i][j];
        dp4[i][j] = (i > 0 && j > 0) ? dp4[i - 1][j - 1] + 1 : mat[i][j];
      }

      ans = Math.max(ans, dp1[i][j], dp2[i][j], dp3[i][j], dp4[i][j]);
    }
  }
  return ans;
}