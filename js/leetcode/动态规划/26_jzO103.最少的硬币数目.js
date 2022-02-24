// 剑指 Offer II 103. 最少的硬币数目
// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

// 你可以认为每种硬币的数量是无限的。

// 递归
function coinChange(coins, amount) {
  // 递归函数定义：使用coins数组凑成amount所需的最少硬币个数
  function _coinChange(coins, amount) {
    if (amount == 0) {
      return 0;
    }
    if (amount < 0) {
      return -1;
    }

    let min = Infinity;
    for (let i = 0; i < coins.length; i++) {
      if (coins[i] <= amount) {
        min = Math.min(min, 1 +_coinChange(coins, amount - coins[i]));
      }
    }
    return min;
  }

  let min = _coinChange(coins, amount);
  return min > amount ? -1 : min;
};

// 记忆化搜索
function coinChange(coins, amount) {
  let memo = Array(amount + 1);
  // 递归函数定义：使用coins数组凑成amount所需的最少硬币个数
  function _coinChange(coins, amount) {
    if (amount == 0) {
      return 0;
    }
    if (amount < 0) {
      return -1;
    }

    if (memo[amount] !== undefined) {
      return memo[amount];
    }

    let min = Infinity;
    for (let i = 0; i < coins.length; i++) {
      if (coins[i] <= amount) {
        min = Math.min(min, 1 +_coinChange(coins, amount - coins[i]));
      }
    }
    return memo[amount] = min;
  }

  let min = _coinChange(coins, amount);
  return min > amount ? -1 : min;
};

// 动态规划
function coinChange(coins, amount) {
  // 状态定义：dp[i]表示coins凑成amount = i时的最少硬币个数
  let dp = Array(amount + 1);
  dp.fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];
}