// 123. 买卖股票的最佳时机 III
// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 动态规划
function maxProfit(prices) {
  // 状态定义：
  // buy1[i]表示第i天结束时只进行了一次买操作的最大利润
  // sell1[i]表示第i天结束时进行了一次买和一次卖操作的最大利润
  // buy2[i]表示第i天结束时进行了第二次买操作时的最大利润
  // sell2[i]表示第i天结束时进行了2次买和2次卖操作时的最大利润
  let n = prices.length;
  let buy1 = Array(n);
  let sell1 = Array(n);
  let buy2 = Array(n);
  let sell2 = Array(n);

  // 状态初始化：
  // 第1天进行了一次买操作，利润为-prices[0]
  buy1[0] = -prices[0];

  // 第一天不能进行第一次卖操作，利润为0
  sell1[0] = 0;

  // 第1天进行第二次买操作，利润为-prices[0]
  buy2[0] = -prices[0];

  // 第一天不能进行第二次卖操作，利润为0
  sell2[0] = 0;

  // 状态转移
  for (let i = 1; i < n; i++) {
    // 第i天结束只进行第一次买操作，要么是前面买的，要么是当天买的，buy1[i] = max(buy1[i - 1], -prices[i])
    buy1[i] = Math.max(buy1[i - 1], -prices[i]);

    // 第i天结束进行了第一次卖操作，要么是前面就已经卖了，要么是第i天卖的，
    // 如果是第i天卖的，那最大利润为前一天买的最大利润加第i天的价格
    // sell1[i] = max(sell1[i - 1], buy1[i - 1] + prices[i]);
    sell1[i] = Math.max(sell1[i - 1], buy1[i - 1] + prices[i]);

    // 第i天结束进行了第二次买操作，要么是前面就已经买了：buy2[i - 1]
    // 要么是第i天买的，此时最大利润是前一天买的最大利润 - 第i天的价格
    // buy2[i] = Math.max(buy2[i - 1], sell1[i - 1] - prices[i])
    buy2[i] = Math.max(buy2[i - 1], sell1[i - 1] - prices[i]);

    // 第i天结束进行了第二次卖操作：
    // sell2[i] = Math.max(sell2[i - 1], buy2[i - 1] + prices[i])
    sell2[i] = Math.max(sell2[i - 1], buy2[i - 1] + prices[i]);
  }

  return sell2[n - 1];
}

// 状态压缩的动态规划
function maxProfit(prices) {
  let n = prices.length;

  let buy1 = -prices[0];
  let sell1 = 0;
  let buy2 = -prices[0];
  let sell2 = 0;

  for (let i = 1; i < n; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }

  return sell2;
}