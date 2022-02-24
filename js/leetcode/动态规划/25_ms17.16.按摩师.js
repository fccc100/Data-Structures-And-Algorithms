// 面试题 17.16. 按摩师
// 一个有名的按摩师会收到源源不断的预约请求，每个预约都可以选择接或不接。在每次预约服务之间要有休息时间，因此她不能接受相邻的预约。给定一个预约请求序列，替按摩师找到最优的预约集合（总预约时间最长），返回总的分钟数。

// 示例 2：
// 输入： [2,7,9,3,1]
// 输出： 12
// 解释： 选择 1 号预约、 3 号预约和 5 号预约，总时长 = 2 + 9 + 1 = 12。

// 与198.打家劫舍问题相同

// 递归
function massage(nums) {
  // 递归函数定义：nums数组在[0, index]范围的最优集合
  function _massage(nums, index) {
    if (!nums.length) {
      return 0;
    }
    if (index == 0) {
      return nums[0];
    }
    if (index == 1) {
      return Math.max(nums[0], nums[1]);
    }

    return Math.max(_massage(nums, index - 1), _massage(nums, index - 2) + nums[index]);
  }

  return _massage(nums, nums.length - 1);
}

// 记忆化搜索
function massage(nums) {
  let memo = Array(nums.length);
  function _massage(nums, index) {
    if (!nums.length) {
      return 0;
    }
    if (index == 0) {
      return nums[0];
    }
    if (index == 1) {
      return Math.max(nums[0], nums[1]);
    }

    if (memo[index] !== undefined) {
      return memo[index];
    }

    return memo[index] = Math.max(_massage(nums, index - 1), _massage(nums, index - 2) + nums[index]);
  }

  return _massage(nums, nums.length - 1);
}

// 动态规划
function massage(nums) {
  if (!nums.length) {
    return 0;
  }
  let dp = Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
}