// 713. 乘积小于 K 的子数组
// 给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。
 
// 示例 1：

// 输入：nums = [10,5,2,6], k = 100
// 输出：8
// 解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2],、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
// 需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。
// 示例 2：

// 输入：nums = [1,2,3], k = 0
// 输出：0

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  if (k == 0 || nums.length == 0) return 0;

  let i = 0;
  let product = 1;
  let res = 0;
  for (let j = 0; j < nums.length; j++) {
    product *= nums[j];
    while (i <= j && product >= k) {
      product /= nums[i];
      i++;
    }
    res += j - i + 1;
  }
  return res;
};