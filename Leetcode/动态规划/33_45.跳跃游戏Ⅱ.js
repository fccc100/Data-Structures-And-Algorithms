// 45. 跳跃游戏 II
// 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

// 假设你总是可以到达数组的最后一个位置。

// 示例 1:
// 输入: nums = [2,3,1,1,4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
// 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。

// 递归
function jump(nums) {

  // 递归函数定义：nums数组从0跳跃到index位置的最小跳跃次数
  function _jump(nums, index) {
    // 从0跳跃到0，不需要跳跃
    if (index == 0) {
      return 0;
    }

    // 从能跳跃到index位置的地方取最小值
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
  let memo = [];
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
        min = Math.min(min, 1 + _jump(nums, i))
      }
    }

    return memo[index] = min;
  }

  return _jump(nums, nums.length - 1);
}

// 动态规划
function jump(nums) {

  // 状态定义：dp[i]表示nums数组从0跳跃到i所需的最小跳跃次数
  let dp = Array(nums.length);
  dp.fill(nums.length + 1);
  dp[0] = 0;

  // 状态转移：要跳跃到i位置，可以从i前面能到达i位置的点 (即nums[j] >= i - j) + 1步到达i位置，从其中取较小值
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] >= i - j) {
        dp[i] = Math.min(dp[i], 1 + dp[j]);
      }
    }
  }

  return dp[nums.length - 1];
}