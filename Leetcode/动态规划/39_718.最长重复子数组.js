// 718. 最长重复子数组
// 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。

// 示例 1：
// 输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// 输出：3
// 解释：长度最长的公共子数组是 [3,2,1] 。

// 递归
function findLength(nums1, nums2) {
  // function _findLength(nums1, nums2, index1, index2) {
  //   if (index1 < 0 || index2 < 0) {
  //     return 0;
  //   }

  //   if (nums1[index1] == nums2[index2]) {
  //     return 1 + _findLength(nums1, nums2, index1 - 1, index2 - 1);
  //   } else {
  //     return 0;
  //   }
  // }

  // return _findLength(nums1, nums2, nums1.length - 1, nums2.length - 1);
};

// 动态规划
function findLength(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let dp = Array(m + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(n + 1);
    dp[i][0] = 0;
  }
  for (let i = 0; i <= n; i++) {
    dp[0][i] = 0;
  }

  let max = -1;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] == nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = 0;
      }
      max = Math.max(max, dp[i][j]);
    }
  }

  return max;
}