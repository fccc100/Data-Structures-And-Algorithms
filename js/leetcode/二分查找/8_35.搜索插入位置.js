// 35. 搜索插入位置
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

// 示例 1:
// 输入: nums = [1,3,5,6], target = 5
// 输出: 2

function searchInsert(nums, target) {
  let l = 0;
  let r = nums.length;
  while(l < r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
}