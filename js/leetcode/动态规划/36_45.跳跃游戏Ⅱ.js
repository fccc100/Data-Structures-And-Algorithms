// 45. 跳跃游戏 II
// 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

// 假设你总是可以到达数组的最后一个位置。

// 递归
function jump(nums) {
  function _jump(nums, index) {
    if (index == 0) {
      return 0;
    }

    let min = nums.length + 1;
    for (let i = 0; i < index; i++) {
      if (nums[i] >= index - i) {
        min = Math.min(min, 1 + _jump(nums, i));
      }
    }

    return min;
  }

  return _jump(nums, nums.length - 1);
}

// 记忆化搜索
function jump(nums) {
  let memo = Array(nums.length);
  function _jump(nums, index) {
    if (index == 0) {
      return 0;
    }
    if (memo[index] !== undefined) {
      return memo[index];
    }

    let min = nums.length + 1;
    for (let i = 0; i < index; i++) {
      if (nums[i] >= index - i) {
        min = Math.min(min, 1 + _jump(nums, i));
      }
    }

    return memo[index] = min;
  }

  return _jump(nums, nums.length - 1);
}

// 动态规划
function jump(nums) {
  let dp = Array(nums.length);
  dp.fill(nums.length + 1);
  dp[0] = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] >= i - j) {
        dp[i] = Math.min(dp[i], 1 + dp[j]);
      }
    }
  }

  return dp[nums.length - 1];
}