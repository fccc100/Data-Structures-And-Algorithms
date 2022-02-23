// 416. 分割等和子集
// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

// 递归, 将nums分割为两个子集，使得两个子集元素和相等，可以转化为 nums数组能否填满容量为 sum/2 的背包 问题
function canPartition(nums) {

  // 递归函数, nums从[0, index]能否填满容量为sum的背包
  function _canPartition(nums, index, sum) {
    if (sum == 0) {
      return true;
    }
    if (index < 0 || sum < 0) {
      return false;
    }

    // 选择将index位置的元素放入背包或者不放入背包
    return _canPartition(nums, index - 1, sum) || _canPartition(nums, index - 1, sum - nums[index]);
  }

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return _canPartition(nums, nums.length - 1, sum / 2);
}