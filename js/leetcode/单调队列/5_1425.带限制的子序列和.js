// 1425. 带限制的子序列和
// 给你一个整数数组 nums 和一个整数 k ，请你返回 非空 子序列元素和的最大值，子序列需要满足：子序列中每两个 相邻 的整数 nums[i] 和 nums[j] ，它们在原数组中的下标 i 和 j 满足 i < j 且 j - i <= k 。

// 数组的子序列定义为：将数组中的若干个数字删除（可以删除 0 个数字），剩下的数字按照原本的顺序排布。

// 示例 1：

// 输入：nums = [10,2,-10,5,20], k = 2
// 输出：37
// 解释：子序列为 [10, 2, 5, 20] 。
// 示例 2：

// 输入：nums = [-1,-2,-3], k = 1
// 输出：-1
// 解释：子序列必须是非空的，所以我们选择最大的数字。
// 示例 3：

// 输入：nums = [10,-2,-10,-5,20], k = 2
// 输出：23
// 解释：子序列为 [10, -2, -5, 20] 。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
  let n = nums.length;
  if (n == 0) return 0;

  let dp = Array(n).fill(0);
  dp[0] = nums[0];

  let queue = [];
  queue.push(0);
  let max = dp[0];
  for (let i = 1; i < n; i++) {

    dp[i] = Math.max(nums[i], dp[queue[0]] + nums[i]);
    max = Math.max(max, dp[i]);
    if (i - queue[0] >= k) {
      queue.shift();
    }

    while (queue.length && dp[queue[queue.length - 1]] <= dp[i]) {
      queue.pop();
    }

    queue.push(i);
  }

  return max;
};