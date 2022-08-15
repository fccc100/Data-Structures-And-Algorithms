// 剑指 Offer II 011. 0 和 1 个数相同的子数组
// 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。

// 示例 1：

// 输入: nums = [0,1]
// 输出: 2
// 说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
// 示例 2：

// 输入: nums = [0,1,0]
// 输出: 2
// 说明: [0, 1] (或 [1, 0]) 是具有相同数量 0 和 1 的最长连续子数组。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let n = nums.length;

  // 把0当作-1求前缀和
  let preSum = Array(n).fill(0);
  preSum[0] = nums[0] == 0 ? -1 : 1;
  for (let i = 1; i < n; i++) {
    preSum[i] = (nums[i] == 0 ? -1 : 1) + preSum[i - 1];
  }
  
  let map = new Map();
  let max = 0;
  for (let i = 0; i < preSum.length; i++) {
    if (preSum[i] == 0) {
      max = Math.max(max, i + 1);
    }

    // preSum[i] - x = 0;
    // x = preSum[i];
    if (map.has(preSum[i])) {
      max = Math.max(max, i - map.get(preSum[i]));
    }

    if (!map.has(preSum[i])) {
      map.set(preSum[i], i);
    }
  }
  return max;
};