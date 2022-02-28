// 121. 买卖股票的最佳时机
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 示例 1：
// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

// 递归
function maxProfit(prices) {

  // 递归函数定义：prices在第index天卖出股票的最大利润
  function _maxProfit(prices, index) {
    if (index == 0) {
      return 0;
    }
    let max = 0;
    for (let i = 0; i < index; i++) {
      max = Math.max(max, prices[index] - prices[i]);
    }

    return Math.max(max, _maxProfit(prices, index - 1));
  }

  return _maxProfit(prices, prices.length - 1);
}

// 记忆化搜索
function maxProfit(prices) {
  let memo = Array(prices.length);
  function _maxProfit(prices, index) {
    if (index == 0) {
      return 0;
    }
    if (memo[index] !== undefined) {
      return memo[index];
    }

    let max = 0;
    for (let i = 0; i < index; i++) {
      max = Math.max(max, prices[index] - prices[i]);
    }

    return memo[index] = Math.max(max, _maxProfit(prices, index - 1));
  }

  return _maxProfit(prices, prices.length - 1);
}

// 动态规划
function maxProfit(prices) {
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