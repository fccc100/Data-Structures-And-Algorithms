// 剑指 Offer II 072. 求平方根
// 给定一个非负整数 x ，计算并返回 x 的平方根，即实现 int sqrt(int x) 函数。

// 正数的平方根有两个，只输出其中的正数平方根。

// 如果平方根不是整数，输出只保留整数的部分，小数部分将被舍去。

// 示例 1:
// 输入: x = 4
// 输出: 2

function mySqrt(x) {
  let l = 1;
  let r = x;
  let res = 0;
  while(l <= r) {
    let mid = l + (r - l >> 1);
    if (mid * mid <= x) {
      res = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return res;
}