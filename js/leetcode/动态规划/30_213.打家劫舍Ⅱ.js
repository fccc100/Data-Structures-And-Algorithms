// 213. 打家劫舍 II
// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

// 递归
function rob(nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  if (nums.length == 2) {
    return Math.max(nums[0], nums[1]);
  }

  // 递归函数定义：计算nums在[i, j]范围内能够偷窃到的最高金额
  function _rob(nums, i, j) {
    if (j == i) {
      return nums[i];
    }
    if (j == i + 1) {
      return Math.max(nums[i], nums[j]);
    }

    return Math.max(_rob(nums, i, j - 1), _rob(nums, i, j - 2) + nums[j]);
  }

  return Math.max(_rob(nums, 0, nums.length - 2), _rob(nums, 1, nums.length - 1));
}

// 记忆化搜索
function rob(nums) {
  
}

// 动态规划
function rob(nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  if (nums.length == 2) {
    return Math.max(nums[0], nums[1]);
  }

  function _rob(nums, start, end) {
    let dp = Array(nums.length - 1);
    dp[0] = nums[start];
    dp[1] = Math.max(nums[start], nums[start + 1]);

    for (let i = 2; i < dp.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i + start]);
    }

    return dp[dp.length - 1];
  }

  // 从[0, 倒数第二位] 及 [0, 倒数第一位]这两个区间中取偷窃金额的较大值
  return Math.max(_rob(nums, 0, nums.length - 2), _rob(nums, 1, nums.length - 1));
}