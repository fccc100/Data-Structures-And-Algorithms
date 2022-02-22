// 53. 最大子数组和
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。
// 示例 1：

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

function maxSubArray(nums) {
  
}

// 2.动态规划求解
function maxSubArray(nums) {
  let n = nums.length;
  let dp = [];
  dp[0] = nums[0];
  let max = nums[0];
  // dp[i] 表示以i结束的子数组的最大和
  // 以i结束的子数组的最大和，从dp[i - 1] + nums[i], nums[i]中取较大值即可
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
    max = Math.max(dp[i], max);
  }

  return max;
}