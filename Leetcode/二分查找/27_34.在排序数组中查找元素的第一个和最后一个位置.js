// 34. 在排序数组中查找元素的第一个和最后一个位置
// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：

// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？


// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 先求大于target的最小值和小于target的最大值，再求target的区间
var searchRange = function (nums, target) {
  let r = upper(nums, target);
  let l = lower(nums, target);
  if (r - l <= 1) {
    return [-1, -1];
  }
  return [l + 1, r - 1];
};

// 大于target的最小值
function upper(nums, target) {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] <= target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}

// 小于target最大值
function lower(nums, target) {
  let l = -1;
  let r = nums.length;
  while (l < r) {
    let mid = l + (r - l + 1 >> 1);
    if (nums[mid] >= target) {
      r = mid - 1;
    } else {
      l = mid;
    }
  }
  return l;
}