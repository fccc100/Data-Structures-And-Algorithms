// 67. 二进制求和
// 给你两个二进制字符串，返回它们的和（用二进制表示）。

// 输入为 非空 字符串且只包含数字 1 和 0。

// 示例 1:

// 输入: a = "11", b = "1"
// 输出: "100"
// 示例 2:

// 输入: a = "1010", b = "1011"
// 输出: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  let res = '';
  while (i >= 0 || j >= 0) {
    let numA = i >= 0 ? Number(a[i]) : 0;
    let numB = j >= 0 ? Number(b[j]) : 0;
    let cur = numA + numB + carry;
    if (cur > 1) {
      carry = 1;
      cur = cur % 2;
    } else {
      carry = 0;
    }
    res = cur + res;
    i--;
    j--;
  }
  if (carry) {
    res = carry + res;
  }
  return res;
};