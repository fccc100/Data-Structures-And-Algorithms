// 325. 和等于 k 的最长子数组长度
// 给定一个数组 nums 和一个目标值 k，找到和等于 k 的最长连续子数组长度。如果不存在任意一个符合要求的子数组，则返回 0。

// 示例 1:

// 输入: nums = [1,-1,5,-2,3], k = 3
// 输出: 4 
// 解释: 子数组 [1, -1, 5, -2] 和等于 3，且长度最长。
// 示例 2:

// 输入: nums = [-2,-1,2,1], k = 1
// 输出: 2 
// 解释: 子数组 [-1, 2] 和等于 1，且长度最长。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
  let preSum = Array(nums.length + 1);
  preSum[0] = 0;

  // map记录出现过的前缀和
  let map = new Map();
  map.set(0, 0);
  let res = 0;
  for (let i = 1; i < preSum.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1];
    if (map.has(preSum[i] - k)) {
      res = Math.max(res, i - map.get(preSum[i] - k));
    }
    if (!map.has(preSum[i])) {
      map.set(preSum[i], i);
    }
  }
  return res;
};

// preSum[i] - ? = k;