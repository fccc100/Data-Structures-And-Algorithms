// 1004. 最大连续1的个数 III
// 给定一个二进制数组 nums 和一个整数 k，如果可以翻转最多 k 个 0 ，则返回 数组中连续 1 的最大个数 。

// 示例 1：

// 输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
// 输出：6
// 解释：[1,1,1,0,0,1,1,1,1,1,1]
// 粗体数字从 0 翻转到 1，最长的子数组长度为 6。
// 示例 2：

// 输入：nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
// 输出：10
// 解释：[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// 粗体数字从 0 翻转到 1，最长的子数组长度为 10。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let l = 0;
  let r = 0;

  let count = [0, 0];
  let res = 0;
  while(r < nums.length) {
    count[nums[r]]++;
    
    if (count[0] > k) {
      count[nums[l]]--;
      l++;
    }
    res = Math.max(res, r - l + 1);
    r++;
  }
  return res;
};