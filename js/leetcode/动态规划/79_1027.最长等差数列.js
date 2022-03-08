// 1027. 最长等差数列
// 给你一个整数数组 nums，返回 nums 中最长等差子序列的长度。

// 回想一下，nums 的子序列是一个列表 nums[i1], nums[i2], ..., nums[ik] ，且 0 <= i1 < i2 < ... < ik <= nums.length - 1。并且如果 seq[i+1] - seq[i]( 0 <= i < seq.length - 1) 的值都相同，那么序列 seq 是等差的。

// 示例 3：
// 输入：nums = [20,1,15,3,10,5,8]
// 输出：4
// 解释：
// 最长的等差子序列是 [20,15,10,5]。

function longestArithSeqLength(nums) {
  // let map = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   map.set(nums[i], i);
  // }

  // let dp = Array(nums.length);
  // for (let i = 0; i < dp.length; i++) {
  //   dp[i] = Array(nums.length).fill(0);
  // }

  // let max = 2;
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (map.has(nums[j] + (nums[j] - nums[i]))) {
  //       let k = map.get(nums[j] + nums[j] - nums[i]);
  //       dp[j][k] = dp[i][j] + 1;
  //       max = Math.max(max, dp[j][k] + 1);
  //     }
  //   }
  // }

  // return max;
}