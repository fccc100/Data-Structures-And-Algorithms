// 1546. 和为目标值且不重叠的非空子数组的最大数目
// 给你一个数组 nums 和一个整数 target 。

// 请你返回 非空不重叠 子数组的最大数目，且每个子数组中数字和都为 target 。

// 示例 1：

// 输入：nums = [1,1,1,1,1], target = 2
// 输出：2
// 解释：总共有 2 个不重叠子数组（加粗数字表示） [1,1,1,1,1] ，它们的和为目标值 2 。
// 示例 2：

// 输入：nums = [-1,3,5,1,4,2,-9], target = 6
// 输出：2
// 解释：总共有 3 个子数组和为 6 。
// ([5,1], [4,2], [3,5,1,4,2,-9]) 但只有前 2 个是不重叠的。
// 示例 3：

// 输入：nums = [-2,6,6,3,5,4,1,2,8], target = 10
// 输出：3
// 示例 4：

// 输入：nums = [0,0,0], target = 0
// 输出：3

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 前缀和同时记录最后一个满足条件的索引
var maxNonOverlapping = function (nums, target) {
  let n = nums.length;

  let preSum = Array(n);
  preSum[0] = nums[0];
  for (let i = 1; i < preSum.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i];
  }

  let map = new Map();
  let lastIndex = -1;

  let res = 0;
  for (let i = 0; i < preSum.length; i++) {
    if (preSum[i] == target) {
      if (lastIndex < 0) {
        res++;
        lastIndex = i;
      }
    }

    if (map.has(preSum[i] - target)) {
      if (map.get(preSum[i] - target) >= lastIndex) {
        res++;
        lastIndex = i;
      }
    }

    map.set(preSum[i], i);
  }
  return res;
};

//           [-1, 3, 5, 1,  4,  2, -9]
//            -1  2  7  8  12  14   5
//            0  0   0  1   0  1
//                      |

//        1 -2 3 4
//      0 1 -1 2 6