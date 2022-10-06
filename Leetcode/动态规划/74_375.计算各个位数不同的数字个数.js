// 357. 计算各个位数不同的数字个数
// 给定一个非负整数 n，计算各位数字都不同的数字 x 的个数，其中 0 ≤ x < 10n 。

// 递归
function countNumbersWithUniqueDigits(n) {
  function _countNumbersWithUniqueDigits(n) {
    if (n == 0) return 1;
    if (n > 10) {
      return _countNumbersWithUniqueDigits(10);
    }

    let digits = 9; // 非0开头的以各个数字结尾的总个数   
    for (let i = 1; i < n; i++) {
      digits *= 10 - i;
    }
    return digits + _countNumbersWithUniqueDigits(n - 1); // 以0开头的其实就是子问题f(n-1)
  }

  return _countNumbersWithUniqueDigits(n);
}