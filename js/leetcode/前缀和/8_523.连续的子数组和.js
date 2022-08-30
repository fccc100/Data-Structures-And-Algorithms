// 523. 连续的子数组和
// 给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：

// 子数组大小 至少为 2 ，且
// 子数组元素总和为 k 的倍数。
// 如果存在，返回 true ；否则，返回 false 。

// 如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。0 始终视为 k 的一个倍数。

// 示例 1：

// 输入：nums = [23,2,4,6,7], k = 6
// 输出：true
// 解释：[2,4] 是一个大小为 2 的子数组，并且和为 6 。
// 示例 2：

// 输入：nums = [23,2,6,4,7], k = 6
// 输出：true
// 解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。 
// 42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。
// 示例 3：

// 输入：nums = [23,2,6,4,7], k = 13
// 输出：false

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let n = nums.length;
  let preSum = Array(n);
  preSum[0] = nums[0];

  for (let i = 1; i < n; i++) {
    preSum[i] = preSum[i - 1] + nums[i];
  }

  let map = new Map();
  for (let i = 0; i < preSum.length; i++) {
    let m = preSum[i] % k;

    // preSum[i]就是nums[i]的前缀和，一定要记住preSum[i]本身就是一个子数组的和，并不一定要减去另一个前缀和才是
    if (m == 0 && i >= 1) {
      return true;
    }
    if (map.has(m)) {
      if (i - map.get(m) >= 2) {
        return true;
      }
    } else {
      map.set(m, i);
    }
  }
  return false;
};

//          [23, 2, 4,  6,  7]
// 前缀和    [23,25, 29, 35, 42]