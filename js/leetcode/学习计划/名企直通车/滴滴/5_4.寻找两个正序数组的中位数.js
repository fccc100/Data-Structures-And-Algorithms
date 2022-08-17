// 4. 寻找两个正序数组的中位数
// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。

// 示例 1：

// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// 示例 2：

// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 1.直接合并排序再求中位数, O((m + n)log(m + n))
var findMedianSortedArrays = function(nums1, nums2) {
  let nums = nums1.concat(nums2);
  nums.sort((a, b) => a - b);
  if (nums.length % 2 == 0) {
    return (nums[nums.length >> 1] + nums[(nums.length >> 1) - 1]) / 2;
  } else {
    return nums[nums.length >> 1];
  }
};

// 2.合并两个有序数组，O(m + n)就可以做到
var findMedianSortedArrays = function(nums1, nums2) {

}