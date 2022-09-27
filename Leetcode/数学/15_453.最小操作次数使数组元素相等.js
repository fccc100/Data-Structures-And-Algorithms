// 453. 最小操作次数使数组元素相等
// 给你一个长度为 n 的整数数组，每次操作将会使 n - 1 个元素增加 1 。返回让数组所有元素相等的最小操作次数。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：3
// 解释：
// 只需要3次操作（注意每次操作会增加两个元素的值）：
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
// 示例 2：

// 输入：nums = [1,1,1]
// 输出：0

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let n = nums.length;
  let sum = 0;
  let min = nums[0];
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    min = Math.min(min, nums[i]);
  }

  return sum - n * min;
};

// 数学题

// 假设目前数组总和为sum，我们需要移动次数为m，那么整体数组总和将会增加m * (n - 1)，这里的n为数组长度，最后数组所有元素都相等为x，于是有：

// sum + m * (n - 1) = x * n   (1)

// 我们再设数组最小的元素为min_val，m = x - min_val​，即 ​x = m + min_val​带入(1)得：

// m = sum - min_val * n​


var minMoves = function (nums) {
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
  }

  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += nums[i] - min;
  }
  return res;
}