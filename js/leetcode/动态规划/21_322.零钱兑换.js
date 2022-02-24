// 322. 零钱兑换
// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

// 你可以认为每种硬币的数量是无限的。

// 递归
function coinChange(coins, amount) {

  // 递归函数定义：coins凑成amount所需的最少硬币个数
  function _coinChange(coins, amount) {
    
  }
}

function coinChange(coins, amount) {
  // 状态定义：dp[i]表示使用coins凑成amount = i的最少硬币个数
  let dp = Array(amount + 1);
  dp.fill(amount + 1);
  dp[0] = 0;
  // 状态转移：
  // dp[i] = 1 + dp[i - coins[j]]
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
}