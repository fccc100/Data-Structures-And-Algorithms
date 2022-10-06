// 123. 买卖股票的最佳时机 III
var maxProfit = function(prices) {
  let n = prices.length;

  // 第一次买第一次卖，第二次买第二次卖分开计算
  let buy1 = Array(n);
  let buy2 = Array(n);
  let sell1 = Array(n);
  let sell2 = Array(n);

  buy1[0] = -prices[0];
  buy2[0] = -prices[0];
  sell1[0] = 0;
  sell2[0] = 0;

  for (let i = 1; i < n; i++) {
    buy1[i] = Math.max(buy1[i - 1], -prices[i]);
    sell1[i] = Math.max(sell1[i - 1], buy1[i - 1] + prices[i]);
    buy2[i] = Math.max(buy2[i - 1], sell1[i - 1] - prices[i]);
    sell2[i] = Math.max(sell2[i - 1], buy2[i - 1] + prices[i]);
  }
  return sell2[n - 1];
}

// 188. 买卖股票的最佳时机 IV
var maxProfit = function(k, prices) {
  // buy[i]表示第i天买入的最大利润
  let buy = Array(k + 1).fill(-Infinity);
  // sell[i]表示第i天卖出的最大利润
  let sell = Array(k + 1).fill(0);

  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j <= k; j++) {
      // 第j天买入的最大利润从当前利润 和 前一天卖出的最大利润 - 当前的价格取较大者
      buy[j] = Math.max(buy[j], sell[j - 1] - prices[i]);
      // 第j天卖出的最大利润从当前最大利润 和 当天买入的最大利润 + 当前的价格中取较大者
      sell[j] = Math.max(sell[j], buy[j] + prices[i]);
    }
  }
  return sell[k];
}