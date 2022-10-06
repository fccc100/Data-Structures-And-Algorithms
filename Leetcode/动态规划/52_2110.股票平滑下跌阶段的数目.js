// 2110. 股票平滑下跌阶段的数目
// 给你一个整数数组 prices ，表示一支股票的历史每日股价，其中 prices[i] 是这支股票第 i 天的价格。

// 一个 平滑下降的阶段 定义为：对于 连续一天或者多天 ，每日股价都比 前一日股价恰好少 1 ，这个阶段第一天的股价没有限制。

// 请你返回 平滑下降阶段 的数目。

// 示例 1：
// 输入：prices = [3,2,1,4]
// 输出：7
// 解释：总共有 7 个平滑下降阶段：
// [3], [2], [1], [4], [3,2], [2,1] 和 [3,2,1]
// 注意，仅一天按照定义也是平滑下降阶段。

// 递归
function getDescentPeriods(prices) {
  // 递归函数定义：以index位置结尾的子数组有几个平滑下降阶段
  function _getDescentPeriods(prices, index) {
    if (index == 0) {
      return 1;
    }

    if (prices[index] == prices[index - 1] - 1) {
      return 1 + _getDescentPeriods(prices, index - 1);
    } else {
      return 1;
    }
  }

  let count = 0;
  for (let i = 0; i < prices.length; i++) {
    count += _getDescentPeriods(prices, i);
  }
  return count;
}

// 记忆化搜索
function getDescentPeriods(prices) {
  let memo = Array(prices.length);
  function _getDescentPeriods(prices, index) {
    if (index == 0) {
      return 1;
    }
    if (memo[index] !== undefined) {
      return memo[index];
    }

    if (prices[index] == prices[index - 1] - 1) {
      return memo[index] = 1 + _getDescentPeriods(prices, index - 1);
    } else {
      return memo[index] = 1;
    }
  }

  let count = 0;
  for (let i = 0; i < prices.length; i++) {
    count += _getDescentPeriods(prices, i);
  }
  return count;
}

// 动态规划
function getDescentPeriods(prices) {
  // 状态定义：dp[i]表示以第i个数结尾的平滑下降阶段的个数
  let dp = Array(prices.length);
  dp[0] = 1;

  // 状态转移：如果dp[i] == dp[i - 1] - 1, dp[i] = dp[i - 1] + 1, 不等于则只能prices[i]单独组成平滑下降阶段，dp[i] = 1
  let count = dp[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] == prices[i - 1] - 1) {
      dp[i] = 1 + dp[i - 1];
    } else {
      dp[i] = 1;
    }
    count += dp[i];
  }

  return count;
}