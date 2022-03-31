// 剑指 Offer 57. 和为s的两个数字
// 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[2,7] 或者 [7,2]

// 双指针之对撞指针
function twoSum(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while(l < r) {
    if (nums[l] + nums[r] === target) {
      return [nums[l], nums[r]];
    } else if (nums[l] + nums[r] > target) {
      r--;
    } else if (nums[l] + nums[r] < target) {
      l++;
    }
  }
  return [];
}