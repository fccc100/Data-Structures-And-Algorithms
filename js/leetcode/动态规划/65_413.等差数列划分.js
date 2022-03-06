// 413. 等差数列划分
// 如果一个数列 至少有三个元素 ，并且任意两个相邻元素之差相同，则称该数列为等差数列。

// 例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。
// 给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。

// 子数组 是数组中的一个连续序列。

// 示例 1：
// 输入：nums = [1,2,3,4]
// 输出：3
// 解释：nums 中有三个子等差数组：[1, 2, 3]、[2, 3, 4] 和 [1,2,3,4] 自身。

// 递归
function numberOfArithmeticSlices(nums) {
  function _numberOfArithmeticSlices(nums, index) {
    if (index < 2) {
      return 0;
    }

    // 如果当前位置与前两个数构成等差数列，则返回 1 + 前一个数等差数列个数
    if (nums[index] - nums[index - 1] == nums[index - 1] - nums[index - 2]) {
      return 1 + _numberOfArithmeticSlices(nums, index - 1);
    } else {
      return 0;
    }
  }

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += _numberOfArithmeticSlices(nums, i);
  }
  return count;
}

// 记忆化搜索
function numberOfArithmeticSlices(nums) {
  let memo = Array(nums.length);
  function _numberOfArithmeticSlices(nums, index) {
    if (index < 2) {
      return 0;
    }

    if (memo[index] !== undefined) {
      return memo[index];
    }

    if (nums[index] - nums[index - 1] == nums[index - 1] - nums[index - 2]) {
      return memo[index] = 1 + _numberOfArithmeticSlices(nums, index - 1);
    } else {
      return memo[index] = 0;
    }
  }

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count += _numberOfArithmeticSlices(nums, i);
  }

  return count;
}

// 动态规划
function numberOfArithmeticSlices(nums) {
  let n = nums.length;
  if (n == 0 || n == 1 || n == 2) {
    return 0;
  }

  // 状态定义：dp[i]表示第i项的等差数列个数
  let dp = Array(n);
  dp[0] = 0;
  dp[1] = 0;

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = 0;
    }
    count += dp[i];
  }

  return count;
}