// 233. 数字 1 的个数
// 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。

// 示例 1：

// 输入：n = 13
// 输出：6
// 示例 2：

// 输入：n = 0
// 输出：0

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  let res = 0;

  // 当前位数 个位 1
  let digit = 1;

  // 当前位数字
  // 当前：13 => 3
  let cur = n % 10;

  // 高位: 999 => 99
  // 高位：13 => 1
  let high = Math.floor(n / 10);

  // 低位：999 => 0
  let low = 0;

  while(high != 0 || cur != 0) {
    // 当前位为0
    // 101 => 
    if (cur == 0) {
      res += high * digit;
    } else if (cur == 1) {
      res += high * digit + low + 1;
    } else {
      res += (high + 1) * digit;
    }

    // 低位加上当前位 * 位数
    low += cur * digit;

    // 当前位进一位
    cur = high % 10;
    
    // 高位
    high = Math.floor(high / 10);

    // 位数 * 10
    digit *= 10;
  }

  return res;
};