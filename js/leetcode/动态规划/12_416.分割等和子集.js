// 416. 分割等和子集
// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

// 递归
 function canPartition(nums) {

  // nums数组中从[0, index]是否能填满容量为sum的背包
  function _canPartition(nums, index, sum) {
    if (sum == 0) {
      return true;
    }
    if (index < 0 || sum < 0) {
      return false;
    }

    return _canPartition(nums, index - 1, sum) || _canPartition(nums, index - 1, sum - nums[index]);
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return _canPartition(nums, nums.length - 1, sum / 2);
 }

 // 2.记忆化搜索
function canPartition(nums) {
  let memo = Array(nums.length);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = [];
  }
  function _canPartition(nums, index, sum) {
    if (sum == 0) {
      return true;
    }
    if (index < 0 || sum < 0) {
      return false;
    }
    if (memo[index][sum] > 0) {
      return memo[index][sum] == 1;
    }

    memo[index][sum] = (_canPartition(nums, index - 1, sum) || _canPartition(nums, index - 1, sum - nums[index])) ? 1 : 0;
    return memo[index][sum] == 1;
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return _canPartition(nums, nums.length - 1, sum / 2);
}

// 3.动态规划
function canPartition(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % 2 != 0) {
    return false;
  }

  let n = nums.length;
  let c = sum / 2;
  let dp = [];
  for (let i = 0; i <= c; i++) {
    dp[i] = nums[0] == i;
  }

  for (let i = 1; i < n; i++) {
    for (let j = c; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]];
    }
  }

  return dp[c];
}