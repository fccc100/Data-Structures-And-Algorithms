// 189. 轮转数组
// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
// 示例 2:

// 输入：nums = [-1,-100,3,99], k = 2
// 输出：[3,99,-1,-100]
// 解释: 
// 向右轮转 1 步: [99,-1,-100,3]
// 向右轮转 2 步: [3,99,-1,-100]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 简单的O(n)空间复杂度
var rotate = function (nums, k) {
  let res = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    res[(i + k) % nums.length] = nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }
  return nums;
};

// O(1)空间复杂度
// 先整个数组翻转
// 再[0, k - 1]翻转
// 再[k, n - 1]翻转
var rotate = function (nums, k) {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
}

function reverse(nums, l, r) {
  while(l < r) {
    swap(nums, l, r);
    l++;
    r--;
  }
}

function swap(nums, l, r) {
  let temp = nums[l];
  nums[l] = nums[r];
  nums[r] = temp;
}