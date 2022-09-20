// 201. 数字范围按位与
// 给你两个整数 left 和 right ，表示区间 [left, right] ，返回此区间内所有数字 按位与 的结果（包含 left 、right 端点）。

// 示例 1：

// 输入：left = 5, right = 7
// 输出：4
// 示例 2：

// 输入：left = 0, right = 0
// 输出：0
// 示例 3：

// 输入：left = 1, right = 2147483647
// 输出：0

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// 超时
 var rangeBitwiseAnd = function(left, right) {
  let res = left;
  for (let i = left; i <= right; i++) {
    res &= i;
  }
  return res;
};


// 2.
var rangeBitwiseAnd = function(left, right) {
  let cnt = 0;
  while (left < right) {
    left = left >> 1;
    right = right >> 1;
    cnt++;
  }
  return left << cnt;
}

// 1.将两个数字往右移，直到移至两个数字相等
// 2.记录移动的次数，最后再左移同样的次数
// 9:    0 0 0 0 1 0 0 1
// 12:   0 0 0 0 1 1 0 0

// =>

// 9:    0 0 0 0 0 0 0 1
// 12:   0 0 0 0 0 0 0 1