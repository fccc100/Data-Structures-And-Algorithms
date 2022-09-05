// 930. 和相同的二元子数组
// 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。

// 子数组 是数组的一段连续部分。

// 示例 1：

// 输入：nums = [1,0,1,0,1], goal = 2
// 输出：4
// 解释：
// 有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
// 示例 2：

// 输入：nums = [0,0,0,0,0], goal = 0
// 输出：15

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let n = nums.length;
  let preSum = Array(n);
  preSum[0] = nums[0];

  for (let i = 1; i < n; i++) {
    preSum[i] = preSum[i - 1] + nums[i];
  }

  let map = new Map();
  let res = 0;
  for (let i = 0; i < preSum.length; i++) {
    if (preSum[i] == goal) {
      res++;
    }
    if (map.has(preSum[i] - goal)) {
      res += map.get(preSum[i] - goal);
    }

    if (map.has(preSum[i])) {
      map.set(preSum[i], map.get(preSum[i]) + 1);
    } else {
      map.set(preSum[i], 1);
    }
  }
  return res;
};

//   [1,0,1,0,1]
//    1 1 2 2 3
//    0 0 1 1 2