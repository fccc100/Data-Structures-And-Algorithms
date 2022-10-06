/**
 * 复习前一天
 */
//  256. 粉刷房子
var minCost = function(costs) {
  let dp = Array(costs.length);
  dp[0] = costs[0];

  for (let i = 1; i < costs.length; i++) {
    dp[i] = Array(3);
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
  }
  return Math.min(dp[costs.length - 1][0], dp[costs.length - 1][1], dp[costs.length - 1][2]);
}

// 原地推导
var minCost = function(costs) {
  let n = costs.length;
  for (let i = 1; i < n; i++) {
    costs[i][0] = Math.min(costs[i - 1][1], costs[i - 1][2]) + costs[i][0];
    costs[i][1] = Math.min(costs[i - 1][0], costs[i - 1][2]) + costs[i][1];
    costs[i][2] = Math.min(costs[i - 1][0], costs[i - 1][1]) + costs[i][2];
  }
  return Math.min(costs[n - 1][0], costs[n - 1][1], costs[n - 1][2]);
}

// 121.买卖股票的最佳时机
var maxProfit = function(prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > min) {
      max = Math.max(max, prices[i] - min);
    } else {
      min = prices[i];
    }
  }
  return max;
};

// 265. 粉刷房子 II
var minCostII = function(costs) {
  let n = costs.length;
  if (n == 0) return 0;
  let k = costs[0].length;
  
  let dp = Array(n);
  dp[0] = costs[0];

  // 遍历房子
  for (let i = 1; i < n; i++) {
    dp[i] = Array(k);
    // 遍历花费
    for (let j = 0; j < k; j++) {
      // 遍历前一间房子的花费求最小值
      let min = Infinity;
      for (let m = 0; m < k; m++) {
        if (m != j) {
          min = Math.min(min, dp[i - 1][m]);
        }
      }
      dp[i][j] = min + costs[i][j];
    }
  }

  let min = Infinity;
  for (let i = 0; i < k; i++) {
    min = Math.min(dp[n - 1][i], min);
  }
  return min;
}

// 优化求最小值的方式
var minCostII = function(costs) {
  let n = costs.length;
  if (n == 0) return 0;
  let k = costs[0].length;
  
  let dp = Array(n);
  dp[0] = costs[0];

  // 遍历房子
  for (let i = 1; i < n; i++) {
    dp[i] = Array(k);

    // 最小值
    let min1 = Infinity;
    let min2 = Infinity;
    for (let j = 0; j < k; j++) {
      if (dp[i - 1][j] < min1) {
        min2 = min1;
        min1 = dp[i - 1][j];
      } else if (dp[i - 1][j] < min2) {
        min2 = dp[i - 1][j];
      }
    }
    // 遍历花费
    for (let j = 0; j < k; j++) {
      if (dp[i - 1][j] != min1) {
        dp[i][j] = min1 + costs[i][j];
      } else {
        dp[i][j] = min2 + costs[i][j];
      }
    }
  }

  let min = Infinity;
  for (let i = 0; i < k; i++) {
    min = Math.min(dp[n - 1][i], min);
  }
  return min;
}

/**
 * -----------------------------------------------------------------------------------分割线---------------------------------------------------------------------
 * -----------------------------------------------------------------------------------分割线---------------------------------------------------------------------
 * 0511
 */
//  714. 买卖股票的最佳时机含手续费
var maxProfit = function(prices, fee) {
  if (!prices.length) return 0;
  // dp[i][0]表示第i天结束后不持有股票的最大利润
  // dp[i][1]表示第i天结束后持有股票的最大利润
  let dp = Array(prices.length);
  dp[0] = Array(2);
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[i] = Array(2);
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[prices.length - 1][0];
}

// 滚动数组优化
var maxProfit = function(prices, fee) {
  if (!prices.length) return 0;

  // 前一天结束不持有股票的利润
  let pre1 = 0;
  // 前一天结束持有股票的利润
  let pre2 = -prices[0];

  // 当前不持有股票的最大利润
  let cur1 = 0;
  // 当前持有股票的最大利润
  let cur2 = 0;
  for (let i = 1; i < prices.length; i++) {
    cur1 = Math.max(pre1, pre2 + prices[i] - fee);
    cur2 = Math.max(pre2, pre1 - prices[i]);

    pre1 = cur1;
    pre2 = cur2;
  }
  return cur1;
}

// 309. 最佳买卖股票时机含冷冻期
var maxProfit = function(prices) {
  // dp[i][0]表示第i天结束持有股票的最大利润
  // dp[i][1]表示第i天结束不持有股票在冷冻期的最大利润
  // dp[i][2]表示第i天结束不持有股票不在冷冻期的最大利润
  let dp = Array(prices.length);
  dp[0] = Array(3);
  // 第一天结束持有股票，说明买了
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  dp[0][2] = 0;

  for (let i = 1; i < prices.length; i++) {
    dp[i] = Array(3);
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    dp[i][1] = dp[i - 1][0] + prices[i];
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
  }
  return Math.max(dp[prices.length - 1][1], dp[prices.length - 1][2]);
}

// 滚动数组优化
var maxProfit = function(prices) {
  // 前一天持有股票的最大利润
  let pre0 = -prices[0];
  // 前一天不持有股票在冷冻期的最大利润
  let pre1 = 0;
  // 前一天不持有股票不在冷冻期的最大利润
  let pre2 = 0;

  // 当前持有股票的最大利润
  let cur0 = 0;
  // 当前不持有股票在冷冻期的最大利润
  let cur1 = 0;
  // 当前不持有股票不在冷冻期的最大利润
  let cur2 = 0;
  for (let i = 1; i < prices.length; i++) {
    cur0 = Math.max(pre0, pre2 - prices[i]);
    cur1 = pre0 + prices[i];
    cur2 = Math.max(pre1, pre2);

    pre0 = cur0;
    pre1 = cur1;
    pre2 = cur2;
  }
  return Math.max(cur1, cur2);
}

// 152. 乘积最大子数组
var maxProduct = function(nums) {
  // maxDp[i]表示[0, i]的乘积最大值
  let maxDp = Array(nums.length);
  // minDp[i]表示[0, i]的乘积最小值
  let minDp = Array(nums.length);

  maxDp[0] = nums[0];
  minDp[0] = nums[0];

  let max = maxDp[0];
  for (let i = 1; i < nums.length; i++) {
    maxDp[i] = Math.max(maxDp[i - 1] * nums[i], minDp[i - 1] * nums[i], nums[i]);
    minDp[i] = Math.min(maxDp[i - 1] * nums[i], minDp[i - 1] * nums[i], nums[i]);
    max = Math.max(max, maxDp[i]);
  }
  return max;
};

// 滚动数组优化
var maxProduct = function(nums) {
  // 前一个最大值
  let preMax = nums[0];
  // 前一个最小值
  let preMin = nums[0];

  // 当前最大值
  let curMax = nums[0];
  // 当前最小值
  let curMin = nums[0];
  let max = preMax;
  for (let i = 1; i < nums.length; i++) {
    curMax = Math.max(preMax * nums[i], preMin * nums[i], nums[i]);
    curMin = Math.min(preMax * nums[i], preMin * nums[i], nums[i]);
    max = Math.max(max, curMax);

    preMax = curMax;
    preMin = curMin;
  }
  return max;
}

