// 410. 分割数组的最大值
// 给定一个非负整数数组 nums 和一个整数 m ，你需要将这个数组分成 m 个非空的连续子数组。

// 设计一个算法使得这 m 个子数组各自和的最大值最小。

// 示例 1：

// 输入：nums = [7,2,5,10,8], m = 2
// 输出：18
// 解释：
// 一共有四种方法将 nums 分割为 2 个子数组。 
// 其中最好的方式是将其分为 [7,2,5] 和 [10,8] 。
// 因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。
// 示例 2：

// 输入：nums = [1,2,3,4,5], m = 2
// 输出：9
// 示例 3：

// 输入：nums = [1,4,4], m = 3
// 输出：4


// [7, 2, 5, 10, 8]  2
// dp[i][j] 表示nums[0, i]范围 分割j次 能得到的最小的最大值
// 前1个数 分割多少次 肯定都是这个数

//    0  1  2  3  4
// 0  7  9  14 24 32 
// 1  7
// 2  7


/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let n = nums.length;

  // 先求前缀和，快速查询区间和
  let preSum = Array(n + 1);
  preSum[0] = 0;
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
  }

  // dp[i][j]表示 nums[0, i]区间分割成j段的各自和的最小最大值
  let dp = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = Array(m + 1).fill(Infinity);
  }

  dp[0][0] = 0;
  // 遍历区间的结尾索引
  for (let i = 1; i <= n; i++) {
    // 遍历分割的段数，最大分割次数为i , m 的较小者
    for (let j = 1; j <= Math.min(i, m); j++) {

      // 这里是遍历上一次分割的位置，可能从0到i分割成[0, k]和[k + 1, i]两部分
      for (let k = 0; k < i; k++) {
        dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], preSum[i] - preSum[k]));
      }
    }
  }

  return dp[n][m];
};


var splitArray = function (nums, m) {
  let n = nums.length;
  
  let preSum = Array(n + 1);
  preSum[0] = 0;
  for (let i = 0; i <= n; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
  }

  // nums[0, ..., i)范围内分割j次的最小最大值
  let dp = Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = Array(m + 1).fill(Infinity);
  }
  dp[0][0] = 0;

  // 遍历区间右边界
  for (let i = 1; i <= n; i++) {
    // 遍历分割次数
    for (let j = 1; j <= Math.min(m, i); j++) {

      // 遍历上一次分割位置
      for (let k = 0; k < i; k++) {
        dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], preSum[i] - preSum[k]));
      }
    }
  }
  return dp[n][m];
}