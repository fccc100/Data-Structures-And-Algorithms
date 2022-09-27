// 121. 买卖股票的最佳时机
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 动态规划
function maxProfit(prices) {
  // 状态定义：dp[i]表示第i天能够获得的最大利润
  let dp = Array(prices.length);

  dp[0] = 0;
  let min = prices[0];
  let max = dp[0];
  for (let i = 1; i < prices.length; i++) {
    dp[i] = Math.max(dp[i - 1], prices[i] - min);
    min = Math.min(min, prices[i]);
    max = Math.max(max, dp[i]);
  }

  return max;
}

// 动态规划2
function maxProfit(prices) {
  // 遍历记录前面已经遍历过的最小值，同时记录当前的最大利润
  // 遍历到i时，最大利润就是已经产生的max或者当前价格减去前面的最小值
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
}