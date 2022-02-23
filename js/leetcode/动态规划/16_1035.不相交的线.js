// 1035. 不相交的线
// 在两条独立的水平线上按给定的顺序写下 nums1 和 nums2 中的整数。

// 现在，可以绘制一些连接两个数字 nums1[i] 和 nums2[j] 的直线，这些直线需要同时满足满足：

//  nums1[i] == nums2[j]
// 且绘制的直线不与任何其他连线（非水平线）相交。
// 请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。

// 以这种方法绘制线条，并返回可以绘制的最大连线数。

// 示例1：
// 输入：nums1 = [1,4,2], nums2 = [1,2,4]
// 输出：2
// 解释：可以画出两条不交叉的线，如上图所示。 
// 但无法画出第三条不相交的直线，因为从 nums1[1]=4 到 nums2[2]=4 的直线将与从 nums1[2]=2 到 nums2[1]=2 的直线相交。

// 该题与最长公共子序列相同，求不相交的线就是求两个数组的最长公共子序列

// 1.递归
function maxUncrossedLines(nums1, nums2) {
  function _maxUncrossedLines(nums1, nums2, index1, index2) {
    if (index1 < 0 || index2 < 0) {
      return 0;
    }

    if (nums1[index1] == nums2[index2]) {
      return 1 + _maxUncrossedLines(nums1, nums2, index1 - 1, index2 - 1);
    } else {
      return Math.max(_maxUncrossedLines(nums1, nums2, index1 - 1, index2), _maxUncrossedLines(nums1, nums2, index1, index2 - 1));
    }
  }

  return _maxUncrossedLines(nums1, nums2, nums1.length - 1, nums2.length - 1);
}

// 2.记忆化搜索
function maxUncrossedLines(nums1, nums2) {
  let memo = Array(nums1.length);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = Array(nums2.length);
  }
  function _maxUncrossedLines(nums1, nums2, index1, index2) {
    if (index1 < 0 || index2 < 0) {
      return 0;
    }

    if (memo[index1][index2] !== undefined) {
      return memo[index1][index2];
    }

    if (nums1[index1] == nums2[index2]) {
      return memo[index1][index2] = 1 + _maxUncrossedLines(nums1, nums2, index1 - 1, index2 - 1);
    } else {
      return memo[index1][index2] = Math.max(_maxUncrossedLines(nums1, nums2, index1 - 1, index2), _maxUncrossedLines(nums1, nums2, index1, index2 - 1));
    }
  }

  return _maxUncrossedLines(nums1, nums2, nums1.length - 1, nums2.length - 1);
}

// 3.动态规划
function maxUncrossedLines(nums1, nums2) {
  
}