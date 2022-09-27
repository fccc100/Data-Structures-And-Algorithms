// 415. 字符串相加
// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

// 示例 1：

// 输入：num1 = "11", num2 = "123"
// 输出："134"

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let res = '';
  let mod = 0;
  while(i >= 0 || j >= 0 || mod != 0) {
    let x = i >= 0 ? Number(num1[i]) : 0;
    let y = j >= 0 ? Number(num2[j]) : 0;
    let sum = x + y + mod;

    res = String(sum % 10) + res;
    mod = Math.floor(sum / 10);
    i--;
    j--;
  }
  return res;
};