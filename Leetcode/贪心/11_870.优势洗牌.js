// 870. 优势洗牌
// 给定两个大小相等的数组 nums1 和 nums2，nums1 相对于 nums 的优势可以用满足 nums1[i] > nums2[i] 的索引 i 的数目来描述。

// 返回 nums1 的任意排列，使其相对于 nums2 的优势最大化。

// 示例 1：

// 输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
// 输出：[2,11,7,15]
// 示例 2：

// 输入：nums1 = [12,24,8,32], nums2 = [13,25,32,11]
// 输出：[24,32,8,12]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
  let n = nums1.length;

  let res = Array(n);
  nums1.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    nums2[i] = [nums2[i], i];
  }

  nums2.sort((a, b) => a[0] - b[0]);
  let i = 0;
  let j = 0;

  let endIndex = n - 1;
  while (i < n) {
    if (nums1[i] > nums2[j][0]) {
      res[nums2[j][1]] = nums1[i];
      i++;
      j++;
    } else {
      res[nums2[endIndex][1]] = nums1[i];
      i++;
      endIndex--;
    }
  }
  return res;
};