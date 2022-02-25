// 740. 删除并获得点数
// 给你一个整数数组 nums ，你可以对它进行一些操作。

// 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。

// 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

// 示例 1：
// 输入：nums = [3,4,2]
// 输出：6
// 解释：
// 删除 4 获得 4 个点数，因此 3 也被删除。
// 之后，删除 2 获得 2 个点数。总共获得 6 个点数。

// 示例 2：
// 输入：nums = [2,2,3,3,3,4]
// 输出：9
// 解释：
// 删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
// 之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
// 总共获得 9 个点数。

// 隐式的打家劫舍问题，将nums数组转换为下标是nums[i], 值是nums[i]在nums数组中的个数，即可使用打家劫舍思路解决

// 递归
function deleteAndEarn(nums) {
  // 数组转换
  let counts = [];
  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]] = counts[nums[i]] === undefined ? 0 : counts[nums[i]];
    counts[nums[i]] ++;
  }
  
  function _deleteAndEarn(nums, index) {
    if (index == 1) {
      return (nums[1] ? nums[1] : 0) * 1; 
    }
    if (index == 2) {
      return Math.max((nums[1] ? nums[1] : 0) * 1, (nums[2] ? nums[2] : 0) * 2);
    }

    return Math.max(_deleteAndEarn(nums, index - 1), _deleteAndEarn(nums, index - 2) + (nums[index] ? nums[index] : 0) * index);
  }

  // 使用打家劫舍思路求解
  return _deleteAndEarn(counts, counts.length - 1);
}

// 记忆化搜索
function deleteAndEarn(nums) {
  // 数组转换
  let counts = [];
  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]] = counts[nums[i]] === undefined ? 0 : counts[nums[i]];
    counts[nums[i]] ++;
  }
  
  let memo = [];
  function _deleteAndEarn(nums, index) {
    if (index == 1) {
      return (nums[1] ? nums[1] : 0) * 1; 
    }
    if (index == 2) {
      return Math.max((nums[1] ? nums[1] : 0) * 1, (nums[2] ? nums[2] : 0) * 2);
    }
    if (memo[index] !== undefined) {
      return memo[index];
    }

    return memo[index] = Math.max(_deleteAndEarn(nums, index - 1), _deleteAndEarn(nums, index - 2) + (nums[index] ? nums[index] : 0) * index);
  }

  // 使用打家劫舍思路求解
  return _deleteAndEarn(counts, counts.length - 1);
}

// 动态规划
function deleteAndEarn(nums) {
  let counts = [];
  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]] = counts[nums[i]] === undefined ? 0 : counts[nums[i]];
    counts[nums[i]] ++;
  }

  // 状态定义：dp[i]表示counts数组第i个位置能打劫到的最大金额
  // 状态转移：dp[i]从dp[i - 1] 或者 dp[i - 2] + counts[i] * i中取较大值
  let dp = [];
  for (let i = 0; i < counts.length; i++) {
    dp[i] = Math.max((dp[i - 1] ? dp[i - 1] : 0), (dp[i - 2] ? dp[i - 2] : 0) + (counts[i] ? counts[i] : 0) * i);
  }

  return dp[dp.length - 1];
}