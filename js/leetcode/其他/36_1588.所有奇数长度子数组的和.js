// 1588. 所有奇数长度子数组的和
// 给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。

// 子数组 定义为原数组中的一个连续子序列。

// 请你返回 arr 中 所有奇数长度子数组的和 。

// 示例 1：

// 输入：arr = [1,4,2,5,3]
// 输出：58
// 解释：所有奇数长度子数组和它们的和为：
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// 我们将所有值求和得到 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
// 示例 2：

// 输入：arr = [1,2]
// 输出：3
// 解释：总共只有 2 个长度为奇数的子数组，[1] 和 [2]。它们的和为 3 。
// 示例 3：

// 输入：arr = [10,11,12]
// 输出：66

/**
 * @param {number[]} arr
 * @return {number}
 */
// 暴力 O(n^3)
var sumOddLengthSubarrays = function (arr) {
  let n = arr.length;

  // [1,4,2,5,3]
  let sum = 0;
  // 元素个数
  for (let i = 1; i <= n; i += 2) {
    // 第一个元素
    for (let j = 0; j < n; j++) {
      if (j + i - 1 >= n) {
        break;
      }

      // 求[j, j + i - 1]的和
      for (let k = j; k < j + i; k++) {
        sum += arr[k];
      }
    }
  }
  return sum;
};

// 2.上面的第三层循环数组区间和，自然想到使用前缀和，优化为O(n^2)
var sumOddLengthSubarrays = function (arr) {
  let n = arr.length;

  let preSum = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    preSum[i] = arr[i - 1] + preSum[i - 1];
  }

  let sum = 0;
  // 元素个数
  for (let i = 1; i <= n; i += 2) {
    // 第一个元素
    for (let j = 0; j < n; j++) {
      if (j + i - 1 >= n) {
        break;
      }

      // 求[j, j + i - 1]的和
      sum += preSum[j + i] - preSum[j];
    }
  }
  return sum;
}

// 3.此问题还有更高效的解法：O(n)
// 求每个数字在奇数数组中出现的次数
var sumOddLengthSubarrays = function (arr) {

}