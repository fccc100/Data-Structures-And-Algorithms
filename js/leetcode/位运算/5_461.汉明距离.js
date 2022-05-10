// 461. 汉明距离
// 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。

// 给你两个整数 x 和 y，计算并返回它们之间的汉明距离。

// 示例 1：

// 输入：x = 1, y = 4
// 输出：2
// 解释：
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// 上面的箭头指出了对应二进制位不同的位置。

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let s1 = getBinary(x);
  let s2 = getBinary(y);

  let res = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) {
      res++;
    }
  }
  return res;
};

function getBinary(n) {
  let res = '';
  for (let i = 31; i >= 0; i--) {
    res += (n & (1 << i)) == 0 ? '0' : '1';
  }
  return res;
}