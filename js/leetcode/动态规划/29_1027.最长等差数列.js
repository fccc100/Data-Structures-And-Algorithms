// 1027. 最长等差数列
// 给你一个整数数组 nums，返回 nums 中最长等差子序列的长度。

// 回想一下，nums 的子序列是一个列表 nums[i1], nums[i2], ..., nums[ik] ，且 0 <= i1 < i2 < ... < ik <= nums.length - 1。
// 并且如果 seq[i+1] - seq[i]( 0 <= i < seq.length - 1) 的值都相同，那么序列 seq 是等差的。

// 示例 2：
// 输入：nums = [9,4,7,2,10]
// 输出：3
// 解释：
// 最长的等差子序列是 [4,7,10]。

// 递归
function longestArithSeqLength(nums) {

  // 递归函数定义：nums数组从[0, index]中的最长等差子序列的长度
  function _longestArithSeqLength(nums, index) {

  }

  return _longestArithSeqLength(nums, nums.length - 1);
}

// 动态规划
function longestArithSeqLength(nums) {
  let dp = Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    dp[i] = Array(2);
  }

}
