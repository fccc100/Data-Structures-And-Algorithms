// 分割等和子集

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

// 增加记忆化