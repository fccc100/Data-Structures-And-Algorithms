// 面试题 05.03. 翻转数位
// 给定一个32位整数 num，你可以将一个数位从0变为1。请编写一个程序，找出你能够获得的最长的一串1的长度。

// 示例 1：

// 输入: num = 1775(110111011112)
// 输出: 8
// 示例 2：

// 输入: num = 7(01112)
// 输出: 4

/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function(num) {
  let res = [];
  // 首先得到二进制数组
  for (let i = 31; i >= 0; i--) {
    res.push((num & (1 << i)) == 0 ? 0 : 1);
  }

  // 再用487.最大连续1的个数思路求解
  return findMaxConsecutiveOnes(res);
};

// 动态规划
var findMaxConsecutiveOnes = function(nums) {
  // dp[i][0]表示不使用翻转操作能得到的最长连续1的长度
  // dp[i][1]表示使用翻转操作能得到的最长连续1的长度
  let dp = Array(nums.length);
  dp[0] = Array(2);
  // 第一位数不翻转：如果这位数是1，得到长度为1，如果是0，得到长度为0
  dp[0][0] = nums[0] == 1 ? 1 : 0;

  // 第一位数翻转：不管这位数是0还是1，都能得到长度为1
  dp[0][1] = 1;

  let max = Math.max(dp[0][0], dp[0][1]);
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Array(2);
    // 第i位数字：
    // 不使用翻转：如果这位数是0，能得到长度为0，如果这位数是1，能得到的最长长度为前一项不使用翻转操作的最长长度 + 1
    // 使用翻转：如果这位数是0，在这个位置需要翻转，能得到最长长度为前一项不使用翻转能得到的最长长度 + 1，如果这位是1，能得到的最长长度是前一项使用翻转操作得到的最长长度 + 1
    dp[i][0] = nums[i] == 0 ? 0 : dp[i - 1][0] + 1;
    dp[i][1] = nums[i] == 0 ? dp[i - 1][0] + 1 : dp[i - 1][1] + 1;

    max = Math.max(max, dp[i][0], dp[i][1]);
  }
  return max;
};