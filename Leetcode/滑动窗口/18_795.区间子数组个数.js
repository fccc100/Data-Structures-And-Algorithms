// 795. 区间子数组个数
// 给你一个整数数组 nums 和两个整数：left 及 right 。找出 nums 中连续、非空且其中最大元素在范围 [left, right] 内的子数组，并返回满足条件的子数组的个数。

// 生成的测试用例保证结果符合 32-bit 整数范围。

// 示例 1：

// 输入：nums = [2,1,4,3], left = 2, right = 3
// 输出：3
// 解释：满足条件的三个子数组：[2], [2, 1], [3]
// 示例 2：

// 输入：nums = [2,9,2,5,6], left = 2, right = 8
// 输出：7

/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// [2,4,9,2,5,6]
var numSubarrayBoundedMax = function(nums, left, right) {
  // 最大值 <= right的子数组的个数 - 最大值 < left的子数组的个数
  return count(nums, right) - count(nums, left - 1);
};

// 计算nums中最大值 <= bound的子数组个数
function count(nums, bound) {
  let cnt = 0;
  let cur = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    cur = nums[i] <= bound ? cur + 1 : 0;
    cnt += cur;
  }
  return cnt;
}
