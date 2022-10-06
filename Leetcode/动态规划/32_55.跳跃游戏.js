// 55. 跳跃游戏
// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标。

// 示例 1：
// 输入：nums = [2,3,1,1,4]
// 输出：true
// 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

// 递归
function canJump(nums) {
  function _canJump(nums, index) {
    if (index == 0) {
      return true;
    }
    if (index < 0) {
      return false;
    }

    let res = false;
    for (let i = 0; i < index; i++) {
      if (nums[i] >= index - i) {
        res = res || _canJump(nums, i);
      }
    }
    return res;
  }

  return _canJump(nums, nums.length - 1);
}

// 记忆化搜索
function canJump(nums) {
  let memo = [];
  function _canJump(nums, index) {
    if (index == 0) {
      return true;
    }
    if (index < 0) {
      return false;
    }

    if (memo[index] !== undefined) {
      return memo[index];
    }

    let res = false;
    for (let i = 0; i < index; i++) {
      if (nums[i] >= index - i) {
        res = res || _canJump(nums, i);
      }
    }
    return memo[index] = res;
  }
  
  return _canJump(nums, nums.length - 1);
}

// 动态规划
function canJump(nums) {
  let dp = Array(nums.length);
  dp[0] = true;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] >= i - j) {
        dp[i] = dp[i] || dp[j];
      }
    }
  }

  return !!dp[nums.length - 1];
}