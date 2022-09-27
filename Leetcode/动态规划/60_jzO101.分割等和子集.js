// 剑指 Offer II 101. 分割等和子集
// 给定一个非空的正整数数组 nums ，请判断能否将这些数字分成元素和相等的两部分。

// 示例 1：
// 输入：nums = [1,5,11,5]
// 输出：true
// 解释：nums 可以分割成 [1, 5, 5] 和 [11] 。

// 递归
function canPartition(nums) {
  // 递归函数定义，nums从[0, index]能否组成target
  function _canPartition(nums, index, target) {
    if (target == 0) {
      return true;
    }
    if (index < 0 || target < 0) {
      return false;
    }

    return _canPartition(nums, index - 1, target) || _canPartition(nums, index - 1, target - nums[index]);
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return _canPartition(nums, nums.length - 1, sum / 2);
}

// 记忆化搜索
function canPartition(nums) {
  let memo = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    memo[i] = [];
  }
  // 递归函数定义，nums从[0, index]能否组成target
  function _canPartition(nums, index, target) {
    if (target == 0) {
      return true;
    }
    if (index < 0 || target < 0) {
      return false;
    }
    if (memo[index][target] !== undefined) {
      return memo[index][target];
    }

    return memo[index][target] = _canPartition(nums, index - 1, target) || _canPartition(nums, index - 1, target - nums[index]);
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return _canPartition(nums, nums.length - 1, sum / 2);
}

// 动态规划
function canPartition(nums) {
  
}