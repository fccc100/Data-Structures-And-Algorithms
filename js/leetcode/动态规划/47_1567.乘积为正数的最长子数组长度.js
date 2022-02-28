// 1567. 乘积为正数的最长子数组长度
// 给你一个整数数组 nums ，请你求出乘积为正数的最长子数组的长度。

// 一个数组的子数组是由原数组中零个或者更多个连续数字组成的数组。

// 请你返回乘积为正数的最长子数组长度。

// 示例  1：
// 输入：nums = [1,-2,-3,4]
// 输出：4
// 解释：数组本身乘积就是正数，值为 24 。

function getMaxLen(nums) {
  
}

// 动态规划
function getMaxLen(nums) {
  let positiveDp = Array(nums.length);
  let negativeDp = Array(nums.length);

  // 状态定义：positiveDp[i]表示以i结尾的乘积为整数的最长子数组长度
  // negativeDp[i]表示以i结尾的乘积为负数的最长子数组长度
  if (nums[0] > 0) {
    positiveDp[0] = 1;
    negativeDp[0] = 0;
  } else if (nums[0] < 0) {
    positiveDp[0] = 0;
    negativeDp[0] = 1;
  } else {
    positiveDp[0] = 0;
    negativeDp[0] = 0;
  }

  // 状态转移：当nums[i]为正数时，positiveDp[i] = positiveDp[i - 1] + 1，negativeDp[i] = negativeDp[i - 1] > 0 ? negativeDp[i - 1] + 1 : 0
  // 当nums[i]为负数时，positiveDp[i] = negativeDp[i - 1] > 0 ? negativeDp[i - 1] + 1 : 0，negativeDp[i] = positiveDp[i - 1] + 1
  let max = positiveDp[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      positiveDp[i] = positiveDp[i - 1] + 1;
      negativeDp[i] = negativeDp[i - 1] > 0 ? negativeDp[i - 1] + 1 : 0;
    } else if (nums[i] < 0) {
      positiveDp[i] = negativeDp[i - 1] > 0 ? negativeDp[i - 1] + 1 : 0;
      negativeDp[i] = positiveDp[i - 1] + 1;
    } else {
      positiveDp[i] = 0;
      negativeDp[i] = 0;
    }
    max = Math.max(positiveDp[i], max);
  }

  return max;
}