// 746. 使用最小花费爬楼梯
// 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

// 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

// 请你计算并返回达到楼梯顶部的最低花费。

// 1.递归
function minCostClimbingStairs(cost) {
  // 递归函数定义：cost从[0, index]的最低花费
  function _minCostClimbingStairs(cost, index) {
    if (index == 0 || index == 1) {
      return 0;
    }

    // 要求到达index处的最小花费，从到达index - 1处的最小花费  + index - 1的值 或者 到达index - 2处的最小花费 + index - 2处的值。
    return Math.min(_minCostClimbingStairs(cost, index - 1) + cost[index - 1], _minCostClimbingStairs(cost, index - 2) + cost[index - 2]);
  }

  return _minCostClimbingStairs(cost, cost.length);
}

// 2.记忆化搜索
function minCostClimbingStairs(cost) {
  let memo = [];
  function _minCostClimbingStairs(cost, index) {
    if (index == 0 || index == 1) {
      return 0;
    }

    if (memo[index] !== undefined) {
      return memo[index];
    }

    return memo[index] = Math.min(_minCostClimbingStairs(cost, index - 1) + cost[index - 1], _minCostClimbingStairs(cost, index - 2) + cost[index - 2]);
  }

  return _minCostClimbingStairs(cost, cost.length);
}

// 3.动态规划
function minCostClimbingStairs(cost) {

  // 状态定义：dp[i]表示cost从[0, i]的最小花费
  let dp = Array(cost.length + 1);
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[cost.length];
}