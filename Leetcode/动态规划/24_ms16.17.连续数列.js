
// 面试题 16.17. 连续数列
// 给定一个整数数组，找出总和最大的连续数列，并返回总和。

// 示例：

// 输入： [-2,1,-3,4,-1,2,1,-5,4]
// 输出： 6
// 解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。

// 与53.最大子数组和相同

// 递归
function maxSubArray(nums) {
  // 递归函数定义：nums数组以index位置结尾的数组的最大子数组和
  function _maxSubArray(nums, index) {
    if (index == 0) {
      return nums[0];
    }

    return Math.max(nums[index], _maxSubArray(nums, index - 1) + nums[index]);
  }

  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, _maxSubArray(nums, i));
  }

  return max;
}

// 记忆化搜索
function maxSubArray(nums) {
  let memo = Array(nums.length);
  function _maxSubArray(nums, index) {
    if (index == 0) {
      return nums[0];
    }

    if (memo[index] !== undefined) {
      return memo[index];
    }

    return memo[index] = Math.max(nums[index], _maxSubArray(nums, index - 1) + nums[index]);
  }

  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, _maxSubArray(nums, i));
  }

  return max;
}

// 动态规划
function maxSubArray(nums) {
  // 状态定义：dp[i]表示以i结尾的最大子数组和
  let dp = Array(nums.length);
  dp[0] = nums[0];
  let max = dp[0];

  // 状态转移：以i位置结尾数组的最大子数组和：要么是nums[i]单独组成的子数组，要么是以i - 1结尾的子数组最大和加上nums[i], 从两者中取较大值即可
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    max = Math.max(max, dp[i]);
  }

  return max;
}