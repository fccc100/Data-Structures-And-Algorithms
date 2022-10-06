// 剑指 Offer II 009. 乘积小于 K 的子数组
// 给定一个正整数数组 nums和整数 k ，请找出该数组内乘积小于 k 的连续的子数组的个数。

// 示例 1:

// 输入: nums = [10,5,2,6], k = 100
// 输出: 8
// 解释: 8 个乘积小于 100 的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
// 需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
// 示例 2:

// 输入: nums = [1,2,3], k = 0
// 输出: 0

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  if (k == 0) return 0;
  if (nums.length == 0) return 0;
  let l = 0;

  let res = 0;
  let product = 1;
  for (let j = 0; j < nums.length; j++) {
    product *= nums[j];

    while (l <= j && product >= k) {
      product /= nums[l];
      l++;
    }
    res += j - l + 1;
  }
  return res;
};