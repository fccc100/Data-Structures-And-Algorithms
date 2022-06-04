// 697. 数组的度
// 给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。

// 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。



// 示例 1：

// 输入：nums = [1,2,2,3,1]
// 输出：2
// 解释：
// 输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。
// 连续子数组里面拥有相同度的有如下所示：
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// 最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。
// 示例 2：

// 输入：nums = [1,2,2,3,1,4,2]
// 输出：6
// 解释：
// 数组的度是 3 ，因为元素 2 重复出现 3 次。
// 所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let map = new Map();
  let maxNum = nums[0];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.get(nums[i]).push(i);
    } else {
      map.set(nums[i], [i]);
    }
    if (map.get(nums[i]).length > max) {
      max = map.get(nums[i]).length;
      maxNum = nums[i];
    }
  }

  let res = Infinity;
  for (let entry of map) {
    if (entry[1].length == max) {
      res = Math.min(res, entry[1][entry[1].length - 1] - entry[1][0] + 1);
    }
  }
  return res;
};