// 题目描述
// 评论 (2.3k)
// 题解 (4.8k)
// 提交记录
// 283. 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 示例 1:

// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 示例 2:

// 输入: nums = [0]
// 输出: [0]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = -1;
  for (let i = 0; i < nums.length; i++) {
    // 发现非零数字就往左移
    if (nums[i] != 0) {
      j++;
      swap(nums, i, j);
    }
  }
};

function swap(nums, l, r) {
  let temp = nums[l];
  nums[l] = nums[r];
  nums[r] = temp;
}