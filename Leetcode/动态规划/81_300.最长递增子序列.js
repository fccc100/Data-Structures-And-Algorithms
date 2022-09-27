// 300. 最长递增子序列
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

// 递归
function lengthOfLIS(nums) {
  function _lengthOfLIS(nums, index) {
    if (index < 0) {
      return 0;
    }

    let max = 0;
    for (let i = 0; i < index; i++) {
      if (nums[i] < nums[index]) {
        max = Math.max(max, 1 + _lengthOfLIS(nums, i));
      }
    }

    return max;
  }

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, _lengthOfLIS(nums, i) + 1);
  }

  return max;
}

// 记忆化搜索
function lengthOfLIS(nums) {
  let memo = Array(nums.length);
  function _lengthOfLIS(nums, index) {
    if (index < 0) {
      return 0;
    }
    if (memo[index] !== undefined) {
      return memo[index];
    }

    let max = 0;
    for (let i = 0; i < index; i++) {
      if (nums[i] < nums[index]) {
        max = Math.max(max, 1 + _lengthOfLIS(nums, i));
      }
    }

    return memo[index] = max;
  }

  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, 1 + _lengthOfLIS(nums, i));
  }
  return max;
}

// 动态规划
function lengthOfLIS(nums) {
  let dp = Array(nums.length).fill(1);

  let max = dp[0];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        max = Math.max(dp[i], max);
      }
    }
  }

  return max;
}