// 518. 零钱兑换 II
// 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。

// 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。

// 假设每一种面额的硬币有无限个。 

// 题目数据保证结果符合 32 位带符号整数。

// 示例 1：
// 输入：amount = 5, coins = [1, 2, 5]
// 输出：4
// 解释：有四种方式可以凑成总金额：
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

// class Solution {
//     public int change(int amount, int[] coins) {
//         int[] dp = new int[amount + 1];
//         dp[0] = 1;
//         for (int coin : coins) {
//             for (int i = coin; i <= amount; i++) {
//                 dp[i] += dp[i - coin];
//             }
//         }
//         return dp[amount];
//     }
// }

function change(amount, coins) {
  function _change(amount, coins) {
    if (amount == 0) {
      return 0;
    }
    if (amount < 0) {
      return -1;
    }

    let res = 0;
    for (let i = 0; i < coins.length; i++) {
      if (coins[i] <= amount) {
        
      }
    }

    return res;
  }

  return _change(amount, coins);
}

// 动态规划
function change(amount, coins) {
  // 状态定义: dp[i] 表示用coins凑成总金额为i的组合数
  let dp = Array(amount + 1);
  dp.fill(0);
  dp[0] = 1;

  // 状态转移：dp[i] = dp[i] + dp[i - coin]
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[amount];
}