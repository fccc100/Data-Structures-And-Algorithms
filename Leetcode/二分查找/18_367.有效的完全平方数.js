// 367. 有效的完全平方数
// 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

// 进阶：不要 使用任何内置的库函数，如  sqrt 。

// 示例 1：
// 输入：num = 16
// 输出：true

function isPerfectSquare(num) {
  let l = 1;
  let r = num;
  while(l <= r) {
    let mid = l + (r - l >> 1);
    if (mid * mid == num) {
      return true;
    } else if (mid * mid < num) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
}