// 1572. 矩阵对角线元素的和
// 给你一个正方形矩阵 mat，请你返回矩阵对角线元素的和。

// 请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。

// 示例  1：

// 输入：mat = [[1,2,3],
//             [4,5,6],
//             [7,8,9]]
// 输出：25
// 解释：对角线的和为：1 + 5 + 9 + 3 + 7 = 25
// 请注意，元素 mat[1][1] = 5 只会被计算一次。

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  let ans = 0;
  for (let i = 0; i < mat.length; i++) {
    if (i == mat.length - i - 1) {
      ans += mat[i][i];
    } else {
      ans += mat[i][i] + mat[i][mat.length - i - 1];
    }
  }
  return ans;
};