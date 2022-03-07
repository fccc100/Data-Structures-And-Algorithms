// 714. 买卖股票的最佳时机含手续费
// 给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。

// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。

// 返回获得利润的最大值。

// 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。

// 动态规划
function maxProfit(prices, fee) {
  // 状态定义：dp[i][0]表示第i天不持有股票的最大利润
  //          dp[i][1]表示第i天持有股票的最大利润
  let dp = Array(prices.length);

  // 状态初始化
  dp[0] = Array(2);
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  // 状态转移
  for (let i = 1; i < prices.length; i++) {
    dp[i] = Array(2);
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return dp[prices.length - 1][0];
}