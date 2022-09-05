// 1685. 有序数组中差绝对值之和
// 给你一个 非递减 有序整数数组 nums 。

// 请你建立并返回一个整数数组 result，它跟 nums 长度相同，且result[i] 等于 nums[i] 与数组中所有其他元素差的绝对值之和。

// 换句话说， result[i] 等于 sum(|nums[i]-nums[j]|) ，其中 0 <= j < nums.length 且 j != i （下标从 0 开始）。

// 示例 1：

// 输入：nums = [2,3,5]
// 输出：[4,3,5]
// 解释：假设数组下标从 0 开始，那么
// result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4，
// result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3，
// result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5。
// 示例 2：

// 输入：nums = [1,4,6,8,10]
// 输出：[24,15,13,15,21]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  let n = nums.length;

  let preSum = Array(n + 1);
  preSum[0] = 0;
  for (let i = 1; i < preSum.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1];
  }

  let res = Array(n);
  for (let i = 0; i < n; i++) {
    // i位置左边的绝对值之和：i个nums[i] 减去 前i个的前缀和
    let left = (i - 0) * nums[i] - preSum[i]

    // i位置右边的绝对值之和：i后面所有数的和(preSum[n] - preSum[i + 1]) 减去 n - i - 1个nums[i]的和
    let right = (preSum[n] - preSum[i + 1]) - ((n - i - 1) * nums[i]);

    // 相加就是最终结果
    let cur = left + right;
    res[i] = cur;
  }
  return res;
};


//   index        0                       1              2
//   nums         2                       3              5
//   preSum    0  2                       5              10
//           (0 - 0) * 2 - preSum[i]     1 + 5 - 3