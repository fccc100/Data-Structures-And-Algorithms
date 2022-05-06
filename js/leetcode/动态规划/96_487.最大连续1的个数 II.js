// 487. 最大连续1的个数 II
// 给定一个二进制数组 nums ，如果最多可以翻转一个 0 ，则返回数组中连续 1 的最大个数。

// 示例 1：

// 输入：nums = [1,0,1,1,0]
// 输出：4
// 解释：翻转第一个 0 可以得到最长的连续 1。
//      当翻转以后，最大连续 1 的个数为 4。
// 示例 2:

// 输入：nums = [1,0,1,1,0,1]
// 输出：4

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  // dp[i][0]表示不使用翻转机会到i位置能得到的连续1的最大个数
  // dp[i][1]表示使用翻转机会到i位置能得到的连续1的最大个数
  let dp = Array(nums.length);
  dp[0] = Array(2);
  dp[0][0] = nums[0] == 1 ? 1 : 0;
  dp[0][1] = 1;

  let max = Math.max(dp[0][0], dp[0][1]);
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Array(2);
    dp[i][0] = nums[i] == 0 ? 0 : dp[i - 1][0] + 1;
    dp[i][1] = nums[i] == 0 ? dp[i - 1][0] + 1 : dp[i - 1][1] + 1;

    max = Math.max(max, dp[i][0], dp[i][1]);
  }
  return max;
};