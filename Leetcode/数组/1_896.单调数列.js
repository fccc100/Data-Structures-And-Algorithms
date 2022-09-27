// 896. 单调数列
// 如果数组是单调递增或单调递减的，那么它是 单调 的。

// 如果对于所有 i <= j，nums[i] <= nums[j]，那么数组 nums 是单调递增的。 如果对于所有 i <= j，nums[i]> = nums[j]，那么数组 nums 是单调递减的。

// 当给定的数组 nums 是单调数组时返回 true，否则返回 false。

// 示例 1：

// 输入：nums = [1,2,2,3]
// 输出：true
// 示例 2：

// 输入：nums = [6,5,4,4]
// 输出：true
// 示例 3：

// 输入：nums = [1,3,2]
// 输出：false

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let a = true;
  let b = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      a = false;
    }
    if (nums[i] > nums[i - 1]) {
      b = false;
    }
  }

  return a || b;
};