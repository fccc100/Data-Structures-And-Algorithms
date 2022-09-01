// 901. 股票价格跨度
// 编写一个 StockSpanner 类，它收集某些股票的每日报价，并返回该股票当日价格的跨度。

// 今天股票价格的跨度被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。

// 例如，如果未来7天股票的价格是 [100, 80, 60, 70, 60, 75, 85]，那么股票跨度将是 [1, 1, 1, 2, 1, 4, 6]。

// 示例：

// 输入：["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
// 输出：[null,1,1,1,2,1,4,6]
// 解释：
// 首先，初始化 S = StockSpanner()，然后：
// S.next(100) 被调用并返回 1，
// S.next(80) 被调用并返回 1，
// S.next(60) 被调用并返回 1，
// S.next(70) 被调用并返回 2，
// S.next(60) 被调用并返回 1，
// S.next(75) 被调用并返回 4，
// S.next(85) 被调用并返回 6。

// 注意 (例如) S.next(75) 返回 4，因为截至今天的最后 4 个价格
// (包括今天的价格 75) 小于或等于今天的价格。

// 单调栈
var StockSpanner = function () {
  this.prices = [];
  this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let prices = this.prices;
  let stack = this.stack;

  let res = 1;
  if (!stack.length) {
    stack.push(prices.length);
    prices.push(price);
    return 1;
  } else {
    while (stack.length && price >= prices[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (!stack.length) {
      res = prices.length + 1;
    } else {
      res = prices.length - stack[stack.length - 1];
    }

    stack.push(prices.length);
    prices.push(price);
  }

  return res;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

// [[],[100],[80],[60],[70],[60],[75],[85]

//      stack
// 100    0       返回1
// 80     1       返回1
// 60     2       返回1
// 70     3