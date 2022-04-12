// 剑指 Offer II 104. 排列的数目
// 给定一个由 不同 正整数组成的数组 nums ，和一个目标整数 target 。请从 nums 中找出并返回总和为 target 的元素组合的个数。数组中的数字可以在一次排列中出现任意次，但是顺序不同的序列被视作不同的组合。

// 题目数据保证答案符合 32 位整数范围。

// 示例 1：
// 输入：nums = [1,2,3], target = 4
// 输出：7
// 解释：
// 所有可能的组合为：
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// 请注意，顺序不同的序列被视作不同的组合。

function combinationSum4(nums, target) {
  // dp[i]表示nums数组组成目标整数为i的组合个数
  let dp = Array(target + 1).fill(0);
  // 组成0，有1种选择
  dp[0] = 1;

  // 对于组成的每个i，nums中每个小于等于i的数，只需要在其中加上i - nums[j],就能组合成i
  // 因此 dp[i] += dp[i - nums[j]]
  for (let i = 1; i <= target, i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] <= i) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }
  return dp[target];
}