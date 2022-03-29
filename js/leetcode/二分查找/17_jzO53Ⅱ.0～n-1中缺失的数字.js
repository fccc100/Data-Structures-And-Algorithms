// 剑指 Offer 53 - II. 0～n-1中缺失的数字
// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

// 示例 1:
// 输入: [0,1,3]
// 输出: 2

// 示例 2:
// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8

// 1.线性查找
function missingNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i) {
      return i;
    }
  }
  return nums[nums.length - 1] + 1;
}

// 2.二分查找
function missingNumber(nums) {
  let l = 0;
  let r = nums.length;
  while(l < r) {
    let mid = l + (r - l >> 1);
    if (nums[mid] == mid) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
}
