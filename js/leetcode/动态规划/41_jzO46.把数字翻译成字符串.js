// 剑指 Offer 46. 把数字翻译成字符串
// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

// 示例 1:
// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"

// 递归
function translateNum(num) {
  // 递归函数定义：num从[0, index]的不同翻译方法的次数
  function _translateNum(num, index) {
    if (index <= 0) {
      return 1;
    }

    // 与91.解码方法不同，这里不管最后一位是不是 0 ，都可以单独翻译成一个字符，所以直接先计算index - 1处有多少中解码方法
    let res = _translateNum(num, index - 1);    
    
    // 如果index - 1位置还不为0,并且后两位组成的数字小于等于25，则说明最后两位还可以翻译成一个字符，再加上index - 2处的解码方法
    if (index > 0 && num[index - 1] != 0 && ((num[index - 1] - '0') * 10 + (num[index] - '0')) <= 25) {
      res += _translateNum(num, index - 2);
    }

    return res;
  }

  return _translateNum(String(num), String(num).length - 1);
}

// 记忆化搜索
function translateNum(num) {
  let memo = Array(String(num).length)
  function _translateNum(num, index) {
    if (index <= 0) {
      return 1;
    }
    if (memo[index] !== undefined) {
      return memo[index];
    }

    // 与91.解码方法不同，这里不管最后一位是不是 0 ，都可以单独翻译成一个字符，所以直接先计算index - 1处有多少中解码方法
    let res = _translateNum(num, index - 1);    
    
    // 如果index - 1位置还不为0,并且后两位组成的数字小于等于25，则说明最后两位还可以翻译成一个字符，再加上index - 2处的解码方法
    if (index > 0 && num[index - 1] != 0 && ((num[index - 1] - '0') * 10 + (num[index] - '0')) <= 25) {
      res += _translateNum(num, index - 2);
    }

    return memo[index] = res;
  }

  return _translateNum(String(num), String(num).length - 1);
}

// 动态规划
function translateNum(num) {
  num = String(num);
  // 状态定义：dp[i]表示num在[0, i]范围可以翻译的方法数
  let dp = Array(num.length + 1);
  dp.fill(0);
  dp[0] = 1;

  for (let i = 1; i <= num.length; i++) {
    dp[i] += dp[i - 1];
    if (i > 1 && num[i - 2] != 0 && ((num[i - 2] - '0') * 10 + (num[i - 1] - '0')) <= 25) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[num.length];
}