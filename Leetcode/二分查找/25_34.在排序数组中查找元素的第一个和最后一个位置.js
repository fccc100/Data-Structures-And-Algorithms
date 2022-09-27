// 34. 在排序数组中查找元素的第一个和最后一个位置
// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：
// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 
// 示例 1：
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

function searchRange(nums, target) {
  let l = searchLeft(nums, target);
  let r = searchRight(nums, target);
  return [l, r];
}

function searchLeft(nums, target) {
  let l = 0;
  let r = nums.length;
  let leftBorder = -2;
  while(l < r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] == target) {
      r = mid;
    } else if (nums[mid] > target) {
      r = mid;
    } else {
      l = mid + 1;
      leftBorder = l;
    }
  }
  return leftBorder;
}

function searchRight(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let rightBorder = -2;
  while(l <= r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] == target) {
      l = mid + 1;
      rightBorder = l;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
      rightBorder = l;
    }
  }
  return rightBorder;
}
