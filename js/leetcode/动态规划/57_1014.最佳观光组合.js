// 1014. 最佳观光组合
// 给你一个正整数数组 values，其中 values[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的 距离 为 j - i。

// 一对景点（i < j）组成的观光组合的得分为 values[i] + values[j] + i - j ，也就是景点的评分之和 减去 它们两者之间的距离。

// 返回一对观光景点能取得的最高分。

// 示例 1：
// 输入：values = [8,1,5,2,6]
// 输出：11
// 解释：i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11

// 递归
function maxScoreSightseeingPair(values) {
  // 递归函数定义：以index为第二个景点的最高得分
  // function _maxScoreSightseeingPair(values, index) {
  //   if (index == 0) {
  //     return 0;
  //   }

  //   return Math.max(_maxScoreSightseeingPair(values, index - 1), )
  // }

  // return maxScoreSightseeingPair(values, values.length - 1);
}

// 动态规划1:O(n^2)，超时
function maxScoreSightseeingPair(values) {
  let dp = Array(values.length);
  dp.fill(-Infinity);

  let max = dp[0];
  for (let i = 1; i < values.length; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], values[i] + values[j] + j - i);
      max = Math.max(dp[i], max);
    }
  }
  return max;
}

// 动态规划2：valuse[i] + i + values[j] - j,只需要一次遍历记录values[i] + i的最大值，同时记录最大值 + valuse[j] - j的最大值
function maxScoreSightseeingPair(values) {
  let res = -Infinity;
  let max = values[0] + 0;
  for (let i = 1; i < values.length; i++) {
    res = Math.max(res, max + values[i] - i);
    max = Math.max(max, values[i] + i);
  }
  return res;
}