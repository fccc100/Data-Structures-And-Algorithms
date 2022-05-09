/**
 * 复习前一天
 */

// 746. 使用最小花费爬楼梯
var minCostClimbingStairs = function(cost) {
  let dp = Array(cost.length + 1);
  // 第一个台阶和第二个台阶都可以直接到达，费用为0
  dp[0] = 0;
  dp[1] = 0;

  // 从第三个台阶开始，最小花费为到达前一个台阶的最小费用+前一个台阶的费用 和 到达前两个台阶的最小费用+前两个台阶的费用的较小者
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[cost.length];
};

// 不使用额外空间
var minCostClimbingStairs = function(cost) {
  cost[0] = cost[0];
  cost[1] = Math.min(cost[1], cost[0] + cost[1]);

  for (let i = 2; i < cost.length; i++) {
    cost[i] = Math.min(cost[i - 1], cost[i - 2]) + cost[i];
  }

  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
}

/**
 * -----------------------------------------------------------------------------------分割线---------------------------------------------------------------------
 * -----------------------------------------------------------------------------------分割线---------------------------------------------------------------------
 * 0509
 */
//  53. 最大子数组和
var maxSubArray = function(nums) {
  // dp[i]表示以i结尾的子数组的和的最大值
  let dp = Array(nums.length);
  dp[0] = nums[0];

  let max = dp[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
};

// dp[i]只依赖于前一项，可以使用滚动数组将空间复杂度降为O(1)
var maxSubArray = function(nums) {
  let prev = nums[0];

  let cur;
  let max = prev;
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, cur);
    prev = cur;
  }
  return max;
}

// 198. 打家劫舍
var rob = function(nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  let dp = Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
};

// dp[i] 只依赖与前一项和前二项，使用滚动数组优化
var rob = function(nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  let pre2 = nums[0];
  let pre1 = Math.max(nums[0], nums[1]);

  let cur = pre1;
  for (let i = 2; i < nums.length; i++) {
    cur = Math.max(pre1, pre2 + nums[i]);
    pre2 = pre1;
    pre1 = cur;
  }
  return cur;
};

// 213. 打家劫舍 II
var rob = function(nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  if (nums.length == 2) {
    return Math.max(nums[0], nums[1]);
  }

  // 求在[start, end]范围内能偷取的最大金额
  function __rob(nums, start, end) {
    let dp = Array(end - start + 1);
    // 第一项就等于开始项
    dp[0] = nums[start];
    // 第二项等于开始项和开始项的后一项的较大者
    dp[1] = Math.max(nums[start], nums[start + 1]);

    // 从第三项开始，使用打家劫舍的思路推导，仅仅是索引比打家劫舍多了个偏移
    for (let i = 2; i < end - start + 1; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i + start]);
    }
    return dp[dp.length - 1];
  }

  // 求从0到倒数第二项能偷取的最大金额和从1到倒数第一项能偷取的最大金额的较大者
  return Math.max(__rob(nums, 0, nums.length - 2), __rob(nums, 1, nums.length - 1));
};

// 使用滚动数组优化空间复杂度
var rob = function(nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  if (nums.length == 2) {
    return Math.max(nums[0], nums[1]);
  }

  // 求在[start, end]范围内能偷取的最大金额
  function __rob(nums, start, end) {
    // 前二项就等于开始项
    pre2 = nums[start];
    // 前一项等于开始项和开始项的后一项的较大者
    pre1 = Math.max(nums[start], nums[start + 1]);

    // 从第三项开始，使用打家劫舍的思路推导，仅仅是索引比打家劫舍多了个偏移
    let cur = pre1;
    for (let i = 2; i < end - start + 1; i++) {
      cur = Math.max(pre1, pre2 + nums[i + start]);
      pre2 = pre1;
      pre1 = cur;
    }
    return cur;
  }

  // 求从0到倒数第二项能偷取的最大金额和从1到倒数第一项能偷取的最大金额的较大者
  return Math.max(__rob(nums, 0, nums.length - 2), __rob(nums, 1, nums.length - 1));
};