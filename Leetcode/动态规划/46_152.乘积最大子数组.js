// 152. 乘积最大子数组
// 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

// 测试用例的答案是一个 32-位 整数。

// 子数组 是数组的连续子序列。

// 示例 1:
// 输入: nums = [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。

// 递归
function maxProduct(nums) {

  // function _minProduct(nums, index) {
  //   if (index == 0) {
  //     return nums[0];
  //   }

  //   return Math.min(_minProduct(nums, index - 1) * nums[index], nums[index]);
  // }

  // // 递归函数定义：nums在[0, index]范围的子数组最大乘积
  // function _maxProduct(nums, index) {
  //   if (index == 0) {
  //     return nums[0];
  //   }

  //   return Math.max(_maxProduct(nums, index - 1) * nums[index], Math.max(_minProduct(nums, index - 1) * nums[index], nums[index]));
  // }

  // let max = nums[0];
  // for (let i = 0; i < nums.length; i++) {
  //   max = Math.max(max, _maxProduct(nums, i))
  // }

  // return max;
}

// 动态规划
function maxProduct(nums) {
  let minDp = Array(nums.length);
  let maxDp = Array(nums.length);
  minDp[0] = nums[0];
  maxDp[0] = nums[0];

  let max = maxDp[0];
  for (let i = 1; i < nums.length; i++) {
    maxDp[i] = Math.max(maxDp[i - 1] * nums[i], Math.max(minDp[i - 1] * nums[i], nums[i]));
    minDp[i] = Math.min(minDp[i - 1] * nums[i], Math.min(maxDp[i - 1] * nums[i], nums[i]));
    max = Math.max(max, maxDp[i]);
  }

  return max;
}