// 163. 缺失的区间
// 给定一个排序的整数数组 nums ，其中元素的范围在 闭区间 [lower, upper] 当中，返回不包含在数组中的缺失区间。

// 示例：

// 输入: nums = [0, 1, 3, 50, 75], lower = 0 和 upper = 99,
// 输出: ["2", "4->49", "51->74", "76->99"]

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
  if (!nums.length) {
    if (lower == upper) {
      return [lower + ''];
    } else {
      return [lower + '->' + (upper + '')];
    }
  }
  if (nums.length == 1) {
    
  }
  let res = [];
  if (nums[0] == lower + 1) {
    res.push(lower + '');
  } else if (nums[0] > lower) {
    res.push(lower + '->' + nums[0] - 1);
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1] + 2) {
      res.push(nums[i] - 1 + '');
    } else if (nums[i] > nums[i - 1] + 2) {
      res.push(nums[i - 1] + 1 + '->' + (nums[i] - 1 + ''));
    }
  }
  if (upper == nums[nums.length - 1] + 1) {
    res.push(upper + '');
  } else if (nums[nums.length - 1] + 1 < upper) {
    res.push(nums[nums.length - 1] + 1 + '->' + (upper + ''));
  }
  return res;
};