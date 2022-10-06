// 1746. 经过一次操作后的最大子数组和
// 你有一个整数数组 nums。你只能将一个元素 nums[i] 替换为 nums[i] * nums[i]。

// 返回替换后的最大子数组和。

// 示例 1：

// 输入：nums = [2,-1,-4,-3]
// 输出：17
// 解释：你可以把-4替换为16(-4*(-4))，使nums = [2,-1,16,-3]. 现在，最大子数组和为 2 + -1 + 16 = 17.
// 
// [
//  [ 2, 4 ],
//  [ 2, 3 ], 
//  [ 2, 18 ], 
//  [ 2, 15 ]
// ]

// 示例 2：
// 输入：nums = [1,-1,1,1,-1,-1,1]
// 输出：4
// 解释：你可以把第一个-1替换为1，使 nums = [1,1,1,1,-1,-1,1]. 现在，最大子数组和为 1 + 1 + 1 + 1 = 4.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function(nums) {
  let n = nums.length;
  if (n == 0) return 0;
  // dp[i][0]表示以第i位结尾不使用操作的子数组和
  // dp[i][1]表示以第i位结尾使用操作的子数组和
  let dp = Array(n);
  dp[0] = Array(2);
  dp[0][0] = nums[0];
  dp[0][1] = nums[0] * nums[0];

  let ans = dp[0][1];
  for (let i = 1; i < n; i++) {
    dp[i] = Array(2);
    dp[i][0] = Math.max(dp[i - 1][0] + nums[i], nums[i]);
    dp[i][1] = Math.max(dp[i - 1][0] + nums[i] * nums[i], dp[i - 1][1] + nums[i], nums[i] * nums[i]);

    ans = Math.max(ans, dp[i][1]);
  }
  return ans;
};

// 滚动数组优化
var maxSumAfterOperation = function(nums) {
  let n = nums.length;
  if (n == 0) return 0;

  let pre0 = nums[0];
  let pre1 = nums[0] * nums[0];

  let ans = pre1;
  let cur0, cur1;
  for (let i = 1; i < n; i++) {
    cur0 = Math.max(pre0 + nums[i], nums[i]);
    cur1 = Math.max(pre0 + nums[i] * nums[i], pre1 + nums[i], nums[i] * nums[i]);

    ans = Math.max(ans, cur1);

    pre0 = cur0;
    pre1 = cur1;
  }
  return ans;
}