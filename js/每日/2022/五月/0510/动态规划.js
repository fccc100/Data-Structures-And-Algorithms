/**
 * 复习前一日题目
 */

//  53. 最大子数组和
var maxSubArray = function(nums) {
  // dp[i]表示以i结尾的子数组的最大和
  let dp = Array(nums.length);
  dp[0] = nums[0];

  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
}

// dp[i]只依赖于前一项，使用滚动数组
var maxSubArray = function(nums) {
  // pre记录前一项作为结尾的子数组的最大和
  let pre = nums[0];

  let cur = pre;
  let max = pre;
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(pre + nums[i], nums[i]);
    pre = cur;
    max = Math.max(max, cur);
  }
  return max;
}

// 198. 打家劫舍
var rob = function(nums) {
  let dp = Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
}

// 滚动数组
var rob = function(nums) {
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);

  // 前一项
  let pre1 = Math.max(nums[0], nums[1]);
  // 前两项
  let pre2 = nums[0];
  let cur;
  for (let i = 2; i < nums.length; i++) {
    cur = Math.max(pre1, pre2 + nums[i]);
    pre2 = pre1;
    pre1 = cur;
  }
  return cur;
}

// 213. 打家劫舍 II
var rob = function(nums) {
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);

  // 求nums数组[start, end]范围偷取的最大金额
  function __rob(nums, start, end) {
    let dp = Array(end - start + 1);
    dp[0] = nums[start];
    dp[1] = Math.max(nums[start + 1], nums[start]);

    for (let i = 2; i < dp.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i + start]);
    }
    return dp[dp.length - 1];
  }

  return Math.max(__rob(nums, 0, nums.length - 2), __rob(nums, 1, nums.length - 1));
};

/**
 * -----------------------------------------------------------------------------------分割线---------------------------------------------------------------------
 * -----------------------------------------------------------------------------------分割线---------------------------------------------------------------------
 * 0510
 */

// 256. 粉刷房子
var minCost = function(costs) {
  // dp[i][j]表示粉刷[0, i]范围房子并且第i号房子使用j颜色的最小花费
  let dp = Array(costs.length);
  dp[0] = costs[0];

  for (let i = 1; i < costs.length; i++) {
    dp[i] = Array(3);
    // 第i号房子使用0号颜色，则前一号房子只能使用1号或者2号颜色
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i][0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i][1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + costs[i][2];
  }
  return Math.min(dp[costs.length - 1][0], dp[costs.length - 1][1], dp[costs.length - 1][2]);
};

// 原地进行推导
var minCost = function(costs) {
  for (let i = 1; i < costs.length; i++) {
    costs[i][0] = Math.min(costs[i - 1][1], costs[i - 1][2]) + costs[i][0];
    costs[i][1] = Math.min(costs[i - 1][0], costs[i - 1][2]) + costs[i][1];
    costs[i][2] = Math.min(costs[i - 1][0], costs[i - 1][1]) + costs[i][2];
  }
  return Math.min(costs[costs.length - 1][0], costs[costs.length - 1][1], costs[costs.length - 1][2]);
}

// 121. 买卖股票的最佳时机
var maxProfit = function(prices) {
  // dp[i]表示[0, i]范围内能获得的最大利润
  let dp = Array(prices.length);
  dp[0] = 0;

  let min = prices[0];
  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > min) {
      dp[i] = prices[i] - min;
    } else {
      dp[i] = dp[i - 1];
      min = prices[i];
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};

// 滚动数组
var maxProfit = function(prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > min) {
      max = Math.max(max, prices[i] - min);
    }
    min = Math.min(min, prices[i]);
  }
  return max;
};

// 265. 粉刷房子 II
// 假如有一排房子共有 n 幢，每个房子可以被粉刷成 k 种颜色中的一种。房子粉刷成不同颜色的花费成本也是不同的。你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。

// 每个房子粉刷成不同颜色的花费以一个 n x k 的矩阵表示。

// 例如，costs[0][0] 表示第 0 幢房子粉刷成 0 号颜色的成本；costs[1][2] 表示第 1 幢房子粉刷成 2 号颜色的成本，以此类推。
// 返回 粉刷完所有房子的最低成本 。

// 示例 1：

// 输入: costs = [[1,5,3],[2,9,4]]
// 输出: 5
// 解释: 
// 将房子 0 刷成 0 号颜色，房子 1 刷成 2 号颜色。花费: 1 + 4 = 5; 
// 或者将 房子 0 刷成 2 号颜色，房子 1 刷成 0 号颜色。花费: 3 + 2 = 5. 

// O(nk^2)时间复杂度
var minCostII = function(costs) {
  let m = costs.length;
  if (m == 0) return 0;
  let n = costs[0].length;

  // dp[i][j]表示第i号房子粉刷成第j种颜色的最小花费
  let dp = Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = Array(n);
  }
  dp[0] = costs[0];

  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let min = Infinity
      for (let k = 0; k < n; k++) {
        if (j != k) {
          min = Math.min(min, dp[i - 1][k]);
        }
      }
      dp[i][j] = costs[i][j] + min;
    }
  }
  let min = dp[m - 1][0];
  for (let i = 0; i < n; i++) {
    min = Math.min(min, dp[m - 1][i]);
  }
  return min;
};

// 优化
var minCostII = function(costs) {
  let m = costs.length;
  if (m == 0) return 0;
  let n = costs[0].length;

  // dp[i][j]表示第i号房子粉刷成第j种颜色的最小花费
  let dp = Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = Array(n);
  }
  dp[0] = costs[0];

  for (let i = 1; i < m; i++) {

    // 先求前一行的最小值和次小值
    let min1 = Infinity;
    let min2 = Infinity;
    for (let j = 0; j < n; j++) {
      if (dp[i - 1][j] <= min1) {
        min2 = min1;
        min1 = dp[i - 1][j];
      } else if (dp[i - 1][j] < min2) {
        min2 = dp[i - 1][j];
      }
    }

    // dp[i][j],如果前一行当前列的值不是最小值，那就当前值加上前一行的最小值
    // 如果前一行当前列的值是最小值，就加上前一行的次小值
    for (let j = 0; j < n; j++) {
      if (dp[i - 1][j] != min1) {
        dp[i][j] = costs[i][j] + min1;
      } else {
        dp[i][j] = costs[i][j] + min2;
      }
    }
  }
  let min = dp[m - 1][0];
  for (let i = 0; i < n; i++) {
    min = Math.min(min, dp[m - 1][i]);
  }
  return min;
};