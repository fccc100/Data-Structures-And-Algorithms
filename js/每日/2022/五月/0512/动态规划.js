/**
 * 复习前一天
 */
//  714. 买卖股票的最佳时机含手续费
var maxProfit = function(prices, fee) {
  let n = prices.length;
  if (n == 0) return 0;
  
  // dp[i][0]表示第i天结束后不持有股票的最大利润
  // dp[i][1]表示第i天结束后持有股票的最大利润
  let dp = new Array(n);
  dp[0] = Array(2);
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  let ans = 0;
  for (let i = 1; i < n; i++) {
    dp[i] = Array(2);
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    ans = Math.max(ans, dp[i][0]);
  }
  return ans;
}

// 309. 最佳买卖股票时机含冷冻期
// 思路：
// dp[i][0]表示第i天结束持有股票的最大利润
// dp[i][1]表示第i天结束不持有股票在冷冻期的最大利润
// dp[i][2]表示第i天结束不持有股票不在冷冻期的最大利润
// 定义好dp后逐步推导

// 152. 乘积最大子数组
// 思路：两个dp分别记录最大乘积和最小值乘积

/**
 * -----------------------------------------------------------------------------------分割线---------------------------------------------------------------------
 * -----------------------------------------------------------------------------------分割线---------------------------------------------------------------------
 * 0512
 */

// 487. 最大连续1的个数 II
var findMaxConsecutiveOnes = function(nums) {
  let n = nums.length;
  if (n == 0) return 0;
  // dp[i][0]表示第i个数字不翻转能得到的最大连续1的个数
  // dp[i][1]表示第i个数字翻转能得到的最大连续1的个数
  let dp = Array(n);
  dp[0] = Array(2);

  dp[0][0] = nums[0];
  dp[0][1] = 1;

  let max = 1;
  for (let i = 1; i < n; i++) {
    dp[i] = Array(2);
    // 第i天在不使用翻转机会的情况下，如果这位数是0，那结果就是0，如果是1，就是前一位+1
    dp[i][0] = nums[i] == 0 ? 0 : dp[i - 1][0] + 1;
    // 第i天使用翻转机会的情况下，如果这位数是0，那就是前面不使用翻转机会的最长长度，加上这一位使用翻转得到的1位长度
    // 如果这位数是1，那就是前面使用了翻转，再加上这一位1的长度
    dp[i][1] = nums[i] == 0 ? dp[i - 1][0] + 1 : dp[i - 1][1] + 1;

    max = Math.max(max, dp[i][0], dp[i][1]);
  }
  return max;
}

// 376. 摆动序列
var wiggleMaxLength = function(nums) {
  let n = nums.length;
  if (n == 0) return 0;

  // downDp[i]表示以第i位结尾并且当前是下降的最长摆动序列长度
  let downDp = Array(n);
  downDp[0] = 1;
  // upDp[i]表示以第i位结尾并且当前是上升的最长摆动序列长度
  let upDp = Array(n);
  upDp[0] = 1;

  let max = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      upDp[i] = downDp[i - 1] + 1;
      downDp[i] = downDp[i - 1];
    } else if (nums[i] < nums[i - 1]) {
      downDp[i] = upDp[i - 1] + 1;
      upDp[i] = upDp[i - 1];
    } else {
      downDp[i] = downDp[i - 1];
      upDp[i] = upDp[i - 1];
    }
    max = Math.max(max, downDp[i], upDp[i]);
  }
  return max;
}

// 滚动数组优化
var wiggleMaxLength = function(nums) {
  let n = nums.length;
  if (n == 0) return 0;

  // 下降
  let preDown = 1;
  // 上升
  let preUp = 1;

  let max = 1;
  let down, up;
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      up = preDown + 1;
      down = preDown;
    } else if (nums[i] < nums[i - 1]) {
      down = preUp + 1;
      up = preUp;
    } else {
      down = preDown;
      up = preUp;
    }
    preDown = down;
    preUp = up;

    max = Math.max(max, down, up);
  }
  return max;
}