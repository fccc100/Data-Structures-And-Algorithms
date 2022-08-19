// 349. 两个数组的交集
// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
// 解释：[4,9] 也是可通过的

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set.add(nums1[i]);
  }

  let res = [];
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      res.push(nums2[i]);
      set.delete(nums2[i]);
    }
  }
  return res;
};