// 977. 有序数组的平方
// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

// 示例 1：

// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]
// 示例 2：

// 输入：nums = [-7,-3,2,3,11]
// 输出：[4,9,9,49,121]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let res = Array(nums.length);
  let l = 0;
  let r = nums.length - 1;
  let index = nums.length - 1;
  while (l <= r) {
    let lt = nums[l] * nums[l];
    let rt = nums[r] * nums[r];
    if (lt > rt) {
      res[index] = lt;
      l++;
    } else {
      res[index] = rt;
      r--;
    }
    index--;
  }
  return res;
};