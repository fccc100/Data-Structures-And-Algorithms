// 531. 孤独像素 I
// 给你一个大小为 m x n 的图像 picture ，图像由黑白像素组成，'B' 表示黑色像素，'W' 表示白色像素，请你统计并返回图像中 黑色 孤独像素的数量。

// 黑色孤独像素 的定义为：如果黑色像素 'B' 所在的同一行和同一列不存在其他黑色像素，那么这个黑色像素就是黑色孤独像素。

// 示例 1：

// 输入：picture = [["W","W","B"],["W","B","W"],["B","W","W"]]
// 输出：3
// 解释：全部三个 'B' 都是黑色的孤独像素
// 示例 2：

// 输入：picture = [["B","B","B"],["B","B","W"],["B","B","B"]]
// 输出：0

/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function(picture) {
  let m = picture.length;
  if (m == 0) return 0;
  let n = picture[0].length;

  // row[i]: 第i行的黑色像素个数
  let row = Array(m).fill(0);

  // col[i]: 第i列的黑色像素个数
  let col = Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (picture[i][j] == 'B') {
        row[i]++;
        col[j]++;
      }
    }
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (picture[i][j] == 'B' && row[i] == 1 && col[j] == 1) {
        res++;
      }
    }
  }
  return res;
};