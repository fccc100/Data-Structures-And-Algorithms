// 122. 买卖股票的最佳时机 II
// 给定一个数组 prices ，其中 prices[i] 表示股票第 i 天的价格。

// 在每一天，你可能会决定购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以购买它，然后在 同一天 出售。
// 返回 你能获得的 最大 利润 。

// 示例 1:
// 输入: prices = [7,1,5,3,6,4]
// 输出: 7
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

// 动态规划
function maxProfit(prices) {
  // 状态定义：dp[i][0] 表示第i天不持有股票的最大利润，dp[i][1]表示第i天持有股票的最大利润
  let dp = Array(prices.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(2);
  }
  
  // 状态初始化:第一天不持有股票，利润为0，持有股票，利润为负第一天的价格
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  // 状态转移：第i天不持有股票的最大利润，要么是前一天不持有股票的最大利润，要么是前一天持有股票的利润 + 第i天的价格
  //          第i天持有股票的最大利润，要么是前一天也持有股票的最大利润，要么是前一天不持有股票的利润 - 第i天的价格
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return dp[prices.length - 1][0];
}

// 贪心
// 可以不限次数的买卖，那只要产生利润就进行交易，最后就是最大利润
function maxProfit(prices) {
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1];
    }
  }

  return max;
}