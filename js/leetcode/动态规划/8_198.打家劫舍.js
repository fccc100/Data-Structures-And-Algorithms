// 198. 打家劫舍
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

// 1.递归求解， 存在重叠子问题
function rob(nums) {

  // _rob，nums数组从[0, index]范围中能打劫到的最大金额
  function _rob(nums, index) {

    // 递归终止条件：[0, 0]范围中能打劫到的最大金额为nums[0], [0, 1]范围能打劫的最大金额为max(nums[0], nums[1])
    if (index == 0) {
      return nums[0];
    }
    if (index == 1) {
      return Math.max(nums[0], nums[1]);
    }

    // 从打劫index位置或者不打劫index位置取较大者
    return Math.max(_rob(nums, index - 1), _rob(nums, index - 2) + nums[index]);
  }

  return _rob(nums, nums.length - 1);
}

// 2.记忆化搜索
function rob(nums) {
  let memo = [];
  function _rob(nums, index) {
    if (index == 0) {
      return nums[0];
    }
    if (index == 1) {
      return Math.max(nums[0], nums[1]);
    }

    if (memo[index] !== undefined) {
      return memo[index];
    }

    return memo[index] = Math.max(_rob(nums, index - 1), nums[index] + _rob(nums, index - 2));
  }

  return _rob(nums, nums.length - 1);
}

// 3.动态规划
function rob(nums) {
  let n = nums.length;
  let dp = [];
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[n - 1];
}