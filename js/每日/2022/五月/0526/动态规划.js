// 322. 零钱兑换
var coinChange = function(coins, amount) {
  // dp[i]表示兑换i金额需要的最小硬币个数
  let dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
}

//518. 零钱兑换Ⅱ
// 5
// [1,2,5]
// dp 0 1 2 3 4 5
//    [ 1, 1, 2, 3, 5, 9 ]

// 错误解法，这题不能先遍历金额，再遍历硬币，要先遍历硬币再遍历金额
var change = function(amount, coins) {
  // dp[i]表示凑齐amount的方法数
  // let dp = Array(amount + 1).fill(0);
  // dp[0] = 1;

  // for (let i = 1; i <= amount; i++) {
  //   for (let j = 0; j < coins.length; j++) {
  //     if (coins[j] <= i) {
  //       dp[i] += dp[i - coins[j]];
  //     }
  //   }
  // }
  // return dp[amount];
};

// dp: [ 1, 1, 2, 2, 3, 4 ]
var change = function(amount, coins) {
  // dp[i]表示凑齐amount的方法数
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }
  return dp[amount];
};
