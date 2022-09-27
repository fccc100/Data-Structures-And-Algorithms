// 面试题 08.11. 硬币
// 硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)

// 示例1:
// 输入: n = 5
// 输出：2
// 解释: 有两种方式可以凑成总金额:
// 5=5
// 5=1+1+1+1+1

// 递归
function waysToChange(n) {
  // let coins = [1, 5, 10, 25];
  // function _waysToChange(n) {
  //   if (n < 0) {
  //     return 0;
  //   }
  //   if (n == 0) {
  //     return 1;
  //   }

  //   let res = 0;
  //   for (let i = 0; i < coins.length; i++) {
  //     res += _waysToChange(n - coins[i]);
  //   }

  //   return res;
  // }

  // return _waysToChange(n);
}

// 动态规划
function waysToChange(n) {
  let coins = [1, 5, 10, 25];

  // 状态定义: dp[i]表示凑成i分有几种方法
  let dp = Array(n + 1);
  dp.fill(0);
  dp[0] = 1;

  // 状态转移：
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= n; j++) {
      dp[j] = (dp[j] + dp[j - coins[i]]) % 1000000007; 
    }
  }

  return dp[n];
}