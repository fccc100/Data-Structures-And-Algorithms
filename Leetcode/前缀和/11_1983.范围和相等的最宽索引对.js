// 1983. 范围和相等的最宽索引对
// 给定两个 以0为索引 的二进制数组 nums1 和 nums2 。找出 最宽 的索引对 (i, j) ，
// 使的 i <= j 并且 nums1[i] + nums1[i+1] + ... + nums1[j] == nums2[i] + nums2[i+1] + ... + nums2[j]。

// 最宽 的指标对是指在 i 和 j 之间的 距离最大 的指标对。一对指标之间的 距离 定义为 j - i + 1 。

// 返回 最宽 索引对的 距离 。如果没有满足条件的索引对，则返回 0 。

// 示例 1:

// 输入: nums1 = [1,1,0,1], nums2 = [0,1,1,0]
// 输出: 3
// 解释:
// 如果i = 1, j = 3:
// Nums1 [1] + Nums1 [2] + Nums1[3] = 1 + 0 + 1 = 2。
// Nums2 [1] + Nums2 [2] + Nums2[3] = 1 + 1 + 0 = 2。
// i和j之间的距离是j - i + 1 = 3 - 1 + 1 = 3。
// 示例 2:

// 输入: nums1 = [0,1], nums2 = [1,1]
// 输出: 1
// 解释:
// If i = 1 and j = 1:
// nums1[1] = 1。
// nums2[1] = 1。
// i和j之间的距离是j - i + 1 = 1 - 1 + 1 = 1。
// 示例 3:

// 输入: nums1 = [0], nums2 = [1]
// 输出: 0
// 解释:
// 没有满足要求的索引对。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 用递归求最长距离，超时了
var widestPairOfIndices = function (nums1, nums2) {
  let n = nums1.length;

  if (n == 0) return 0;

  let preSum1 = Array(n);
  preSum1[0] = nums1[0];
  for (let i = 1; i < n; i++) {
    preSum1[i] = preSum1[i - 1] + nums1[i];
  }

  let preSum2 = Array(n);
  preSum2[0] = nums2[0];
  for (let i = 1; i < n; i++) {
    preSum2[i] = preSum2[i - 1] + nums2[i];
  }

  return maxDistance(preSum1, preSum2, 0, n - 1);
};

function maxDistance(nums1, nums2, l, r) {
  if (l > r) {
    return 0;
  }

  if (nums1[r] == nums2[r]) {
    return r + 1;
  }

  if (nums1[r] - nums1[l] == nums2[r] - nums2[l]) {
    return r - l;
  }

  return Math.max(maxDistance(nums1, nums2, l + 1, r), maxDistance(nums1, nums2, l, r - 1))
}

// 2.通过前缀和的差值看某一段是否相等
var widestPairOfIndices = function (nums1, nums2) {
  let n = nums1.length;

  if (n == 0) return 0;

  let preSum1 = Array(n);
  preSum1[0] = nums1[0];
  for (let i = 1; i < n; i++) {
    preSum1[i] = preSum1[i - 1] + nums1[i];
  }

  let preSum2 = Array(n);
  preSum2[0] = nums2[0];
  for (let i = 1; i < n; i++) {
    preSum2[i] = preSum2[i - 1] + nums2[i];
  }

  let diff = Array(n);
  for (let i = 0; i < n; i++) {
    diff[i] = preSum1[i] - preSum2[i];
  }

  let map = new Map();
  let res = 0;
  for (let i = 0; i < n; i++) {
    // 如果差值为0，说明从0到i这一段就是相等的，更新下结果
    if (diff[i] == 0) {
      res = Math.max(res, i + 1);
    }

    // 如果出现同一个差值，说明这段区间和是相等的，更新下结果
    if (map.has(diff[i])) {
      res = Math.max(res, i - map.get(diff[i]));
    } else {
      map.set(diff[i], i);
    }
  }
  return res;
};

// 总结
// 前缀和不仅仅可以用来快速求某一区间的和
// 还可以通过两个数组前缀和的差值来快速判断两个数组和相等的区间



//                           [1, 1, 0, 1]
//                           [1, 2, 2, 3]

//                           [0, 1, 1, 0]
//                           [0, 1, 2, 2]

//     前缀和差值             1  1   0  1

//   0  1
//   0  1

//   1  1
//   1  2

//   -1 -1

//                           [0,  0,  1,  0,  0]
//                            0   0   1   1   1

//                           [1,  0,  0,  1,  0]
//                            1   1   1   2   2

//  diff                      -1  -1  0   -1  -1