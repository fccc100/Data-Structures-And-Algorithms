// 2099. 找到和最大的长度为 K 的子序列
// 给你一个整数数组 nums 和一个整数 k 。你需要找到 nums 中长度为 k 的 子序列 ，且这个子序列的 和最大 。

// 请你返回 任意 一个长度为 k 的整数子序列。

// 子序列 定义为从一个数组里删除一些元素后，不改变剩下元素的顺序得到的数组。

// 示例 1：

// 输入：nums = [2,1,3,3], k = 2
// 输出：[3,3]
// 解释：
// 子序列有最大和：3 + 3 = 6 。
// 示例 2：

// 输入：nums = [-1,-2,3,4], k = 3
// 输出：[-1,3,4]
// 解释：
// 子序列有最大和：-1 + 3 + 4 = 6 。
// 示例 3：

// 输入：nums = [3,4,3,3], k = 2
// 输出：[3,4]
// 解释：
// 子序列有最大和：3 + 4 = 7 。
// 另一个可行的子序列为 [4, 3] 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = [nums[i], i];
  }
  nums.sort((a, b) => b[0] - a[0]);

  let res = nums.slice(0, k);
  res.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < res.length; i++) {
    res[i] = res[i][0];
  }
  return res;
};