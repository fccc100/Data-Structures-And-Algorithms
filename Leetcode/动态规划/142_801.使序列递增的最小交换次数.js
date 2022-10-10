// 801. 使序列递增的最小交换次数
// 我们有两个长度相等且不为空的整型数组 nums1 和 nums2 。在一次操作中，我们可以交换 nums1[i] 和 nums2[i]的元素。

// 例如，如果 nums1 = [1,2,3,8] ， nums2 =[5,6,7,4] ，你可以交换 i = 3 处的元素，得到 nums1 =[1,2,3,4] 和 nums2 =[5,6,7,8] 。
// 返回 使 nums1 和 nums2 严格递增 所需操作的最小次数 。

// 数组 arr 严格递增 且  arr[0] < arr[1] < arr[2] < ... < arr[arr.length - 1] 。

// 注意：

// 用例保证可以实现操作。

// 示例 1:

// 输入: nums1 = [1,3,5,4], nums2 = [1,2,3,7]
// 输出: 1
// 解释: 
// 交换 A[3] 和 B[3] 后，两个数组如下:
// A = [1, 3, 5, 7] ， B = [1, 2, 3, 4]
// 两个数组均为严格递增的。
// 示例 2:

// 输入: nums1 = [0,3,5,8,9], nums2 = [2,1,4,6,9]
// 输出: 1

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function (nums1, nums2) {
  let n = nums1.length;

  // dp[i][0] 表示到达位置i时并且i位置不进行交换的最小操作次数
  // dp[i][1] 表示到达位置i时并且i位置进行交换的最小操作次数
  let dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(2).fill(n + 1);
  }

  // nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]
  // nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]
  dp[0][0] = 0;
  dp[0][1] = 1;
  for (let i = 1; i < n; i++) {
    if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
      dp[i][0] = dp[i - 1][0];
      dp[i][1] = dp[i - 1][1] + 1;
    }
    if (nums2[i] > nums1[i - 1] && nums1[i] > nums2[i - 1]) {
      dp[i][0] = Math.min(dp[i][0], dp[i - 1][1]);
      dp[i][1] = Math.min(dp[i][1], dp[i - 1][0] + 1);
    }
  }

  return Math.min(dp[n - 1][0], dp[n - 1][1]);
};