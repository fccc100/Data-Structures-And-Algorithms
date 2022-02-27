// 91. 解码方法
// 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// 要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：

// "AAJF" ，将消息分组为 (1 1 10 6)
// "KJF" ，将消息分组为 (11 10 6)
// 注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。

// 给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。

// 题目数据保证答案肯定是一个 32 位 的整数

// 递归
function numDecodings(s) {
  // 递归函数定义：s字符串在[0, index]范围内的解码方法数
  // function _numDecodings(s, index) {
  //   if (index == 0) {
  //     return 1;
  //   }
  //   if (index == 1) {
  //     return s[0] == '0' ? 0 : (s[1] == 0 || s[1] > 6) ? 1 : 2;
  //   }

  //   if (s[index - 1] !== '0') {
  //     if (index > 1 && s[index - 2] != '0' && ((s[index - 2] - '0') * 10 + (s[index - 1] - '0') <= 26)) {
  //       return _numDecodings(s, index - 1) + _numDecodings(s, index - 2);
  //     }
  //     return _numDecodings(s, index - 1);
  //   }
  //   if (index > 1 && s[index - 2] != '0' && ((s[index - 2] - '0') * 10 + (s[index - 1] - '0') <= 26)) {
  //     return _numDecodings(s, index - 2);
  //   }
  // }

  // return _numDecodings(s, s.length)
}

// 动态规划
function numDecodings(s) {
  let dp = Array(s.length + 1);
  dp.fill(0);
  dp[0] = 1;

  for (let i = 1; i <= s.length; i++) {
    if (s[i - 1] !== '0') {
      dp[i] = dp[i] + dp[i - 1];
    }
    if (i > 1 && s[i - 2] !== '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0')) <= 26) {
      dp[i] = dp[i] + dp[i - 2];
    }
  }
  return dp[s.length];
}

// 记忆化搜索
function numDecodings(s) {
  // let memo = Array(s.length)
  // // 递归函数定义：s字符串在[0, index]范围内的解码方法数
  // function _numDecodings(s, index) {
  //   if (index == 0) {
  //     return s[index] == '0' ? 0 : 1;
  //   }
  //   if (index == 1) {
  //     return s[0] == '0' ? 0 : (s[1] == 0 || s[1] > 6) ? 1 : 2;
  //   }
  //   if (memo[index] !== undefined) {
  //     return memo[index];
  //   }

  //   if (s[index] == 0) {
  //     if (s[index - 1] == 0) {
  //       return memo[index] = 0;
  //     } else {
  //       return memo[index] = _numDecodings(s, index - 2);
  //     }
  //   }
  //   if (s[index - 1] == 0 || s[index - 1] >= 3) {
  //     return memo[index] = _numDecodings(s, index - 1);
  //   } else {
  //     return memo[index] = _numDecodings(s, index - 1) + _numDecodings(s, index - 2);
  //   }
  // }

  // return _numDecodings(s, s.length - 1)
}