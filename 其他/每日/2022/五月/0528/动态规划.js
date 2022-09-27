// 416.分割等和子集
function canPartition(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  if (sum % 2 != 0) {
    return false;
  }

  function __canPartition(nums, index, sum) {
    if (sum == 0) return true;

    if (sum < 0 || index < 0) {
      return false;
    }

    return __canPartition(nums, index - 1, sum) || __canPartition(nums, index - 1, sum - nums[index]);
  }
  return __canPartition(nums, nums.length - 1, sum / 2)
}

// 增加记忆化
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

// 动态规划
function canPartition(nums) {
  
}

// 494.目标和
var findTargetSumWays = function(nums, target) {
  let res = 0;
  function __findTargetSumWays(nums, index, cur, target) {
    if (cur == target && index == nums.length) {
      res++;
    }

    if (index > nums.length) {
      return;
    }

    // +
    __findTargetSumWays(nums, index + 1, cur + nums[index], target);
    // -
    __findTargetSumWays(nums, index + 1, cur - nums[index], target);
  }

  __findTargetSumWays(nums, 0, 0, target);
  return res;
};

// 回溯
var findTargetSumWays = function(nums, target) {
  let res = 0;
  function __findTargetSumWays(nums, index, cur, target) {
    if (cur == target && index == nums.length) {
      res++;
    }

    if (index > nums.length) {
      return;
    }

    // 选择+
    __findTargetSumWays(nums, index + 1, cur + nums[index], target);

    // 选择-
    __findTargetSumWays(nums, index + 1, cur - nums[index], target);
  }

  __findTargetSumWays(nums, 0, 0, target);
  return res;
}